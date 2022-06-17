import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectoService } from 'src/app/services/proyecto.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  public proyectos: Proyectos | any;
  
  constructor(private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyects().subscribe((res)=>{
      this.proyectos = res
      let count = 1
      this.proyectos.map((item:any,index:number)=>{ 
        switch (count) {
          case 1:
            item.class = "container-blue"
            break;
            case 2:
              item.class = "container-red"
              break;          
              case 3:
                item.class = "container-white"
                break;
          default:
            break;
        }
        if(count === 3){
          count = 0
        }
        count++
      })
    })
  }

  lugar(value:number){
    if(value%2 == 0){
      return false;
    }
    else{
      return true
    }
  }

}
