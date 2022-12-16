import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { Item } from "./item";

@Component({
    selector: 'unifor-paginacao',
    templateUrl: 'paginacao.component.html',
    styleUrls: ['paginacao.component.css']
})
export class PaginacaoComponent {

    @Input()
    totalPages = 35;

    @Input()
    atualPage = 1;

    showFirst = true;
    showLast = true;
    listItens:Array<Item> = [];

    @Output()
    Click = new EventEmitter<Event>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['atualPage']) {
          this.loadPagination();
        }
      }

    setPage (page:number, event:Event) {
        this.Click.emit(event);
        this.atualPage = page;
        this.loadPagination();
    }

    loadPagination () {

        let firstPage:number = (this.atualPage - 2) <= 1 ? 1 : this.atualPage - 2;
        let showTotalPages:number = 5 - (this.atualPage - firstPage) -1;
        let lastPage:number =  (this.atualPage + showTotalPages);

        if(this.atualPage > (this.totalPages - 3)) {
            showTotalPages = 5 - (this.totalPages - this.atualPage) - 1
            firstPage = this.atualPage - showTotalPages
            lastPage = this.atualPage + (5 - showTotalPages) - 1
        }

        this.showFirst = this.atualPage > 3 ? true : false;

        this.listItens = [];
        for(let i = firstPage; i <= lastPage; i++){
            const active = i == this.atualPage ? 'active' : '';
            const item:Item = {"page":i,"active":active};
            this.listItens.push(item);
        }

        this.showLast = this.atualPage < (this.totalPages - 2) ? true : false;
        
    }
}