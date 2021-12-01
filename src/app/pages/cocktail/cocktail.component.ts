import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  idc:any
  detailCocktail:any

  constructor(private actRoute: ActivatedRoute,private _cocktail:CocktailService) {
    const {id} = actRoute.snapshot.params;
    this.idc = id
    console.log(id);
   }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this._cocktail.getDetailById(this.idc).subscribe((res:any)=>{
      console.log(res)
      this.detailCocktail = res;
    })
    
  }

}
