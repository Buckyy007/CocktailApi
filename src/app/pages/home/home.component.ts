import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from 'src/app/services/cocktail.service';
import {CocktailComponent} from 'src/app/pages/cocktail/cocktail.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cocktails :any;
  
  constructor(private _cocktail:CocktailService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(){
    this._cocktail.getCocktails().subscribe((res:any)=>{
      this.cocktails= res
    })
  }

  goCocktail(id:string){
    //this.router.navigateByUrl(`cocktail/${id}`)
    this.router.navigate(['/cocktail',id])
    
  }

}
