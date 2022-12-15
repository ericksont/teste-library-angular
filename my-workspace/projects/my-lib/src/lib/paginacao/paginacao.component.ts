import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'unifor-paginacao',
  templateUrl: 'paginacao.component.html',
  styleUrls: ['paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  tagHtml: Array<object> = [];
  alignPaginatorCss:string = '';
  offsetPage: number = 2;
  disabledAnterior: string = '';
  disabledProxima: string = '';
  html:Array<any> = [];
  loading: boolean = false;

  //@Output() currentPage: number = 1;
  currentPage: number = 1;
  @Output() paginaAtual  = new EventEmitter<number>();
  @Input() align:string = "center";
  @Input() rows: number | undefined;            // Quantidade maxima de registros exibido na tabela por pagina
  @Input() totalPages:number = 0;       // Quantidade total de paginas

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalPages']) {
      this.gerarTagDinamica();
      this.alignPaginator();
    }
  }

  alignPaginator() { this.alignPaginatorCss = `paginacao-custom-${this.align}`; }

  gerarTagDinamica(): void {
    let initPage:number = 1;
    let lastPage:any = this.totalPages;

    //Inicializa  com 5 botoes de paginacão se a quantidade de paginas for maior que 5.
    if(this.totalPages > 5) lastPage =5;


    //this.totalPages = Math.round(this.totalRecords/this.rows);
    this.disabledAnterior = "disabled";
    for (let i = initPage; i <= lastPage; i++) {
      this.tagHtml.push({"page":i, "active":(i === this.currentPage) ? "active" : ""});
    }
  }

  previousPage(event: any):void {
    this.setPage(Math.max(1,this.currentPage -1),event);
  }

  onPage(paginaAtual: any,event: any):void{
    this.setPage(paginaAtual,event);
  }

  nextPage(event: any):void {
    this.setPage(Math.min(this.totalPages, this.currentPage + 1),event);
  }

  setPage(currentPage: number,event: { preventDefault: () => void; }){
    event.preventDefault();
    this.loading = true;
    this.currentPage = currentPage;
    this.paginaAtual.emit(this.currentPage);

    this.disabledAnterior = "";
    this.disabledProxima = "";

    const startPage = Math.max(1, this.currentPage - this.offsetPage);
    const endPage = Math.min(this.totalPages, this.currentPage + this.offsetPage);

    if(this.currentPage == 1) this.disabledAnterior = "disabled";
    if(this.currentPage == this.totalPages) this.disabledProxima = "disabled";

    this.tagHtml = [];
    for (let i = startPage; i <= endPage; i++) {
      this.tagHtml.push({"page":i, "active":(i === this.currentPage) ? "active" : ""});
    }
    this.loading = false;
    console.log(this.currentPage);
  }
}
