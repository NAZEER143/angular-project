import { style } from '@angular/animations';
import { Component, EventEmitter, HostListener, Output, ViewEncapsulation } from '@angular/core';

// localization module import
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import * as $ from "jquery";

// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  isCollapsed = false;
  @Output() newItemEvent = new EventEmitter<string>();
  selectedLanguage: string = 'English';
  selectedColor:string = '#6200ee';
  iconType:string = 'menu';
  listOfColors:any = [
    {'color_code':'linear-gradient(90deg, rgb(74, 20, 140), rgb(136, 14, 79))','label':'Theme 1','value':'theme1'},
    {'color_code':'#4f4789','label':'Theme 2','value':'theme2'},
    {'color_code':'#6200ee','label':'Theme 3','value':'theme3'},
    {'color_code':'#222b45','label':'Theme 4','value':'theme4'},
  ];
  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  constructor(public translate: TranslateService) {
    
    const currentLanguage = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    let previousClr = localStorage.getItem('color-code');
    if(previousClr){
      this.selectedColor = previousClr;
    }
    this.newItemEvent.emit(this.selectedColor);
  }

  toggle = true;
  status = 'pink';
  changeColo: any = 'linear-gradient(90deg,#4a148c,#880e4f)';

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'pinkcolor' : 'greycolor';
  }

  changeColor(event: any) {
    this.changeColo = event.target.value;
    this.newItemEvent.emit(this.changeColo);
  }

  toggleEvent(value: any) {
    this.newItemEvent.emit(this.selectedColor);
    localStorage.setItem('color-code',this.selectedColor);
  }

  selectedLang(lang: string, selectedlang: string) {
    this.translate.use(lang);
    this.selectedLanguage = selectedlang;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if($('.side-drawer.expand').length){
      this.iconType = 'close';
    }
    else{
      this.iconType = 'menu';
    }
  }
  togglePanel(){
    if(this.iconType == 'menu'){
      this.iconType = 'close';
    }
    else{
      this.iconType = 'menu';
    }
    $('.side-drawer').toggleClass('expand');
  }

  rightPopup(){
    $('.cdk-overlay-connected-position-bounding-box').toggleClass('display-popup-icons');
  }
}
