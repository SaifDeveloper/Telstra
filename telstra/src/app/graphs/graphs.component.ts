import { Component, OnInit } from '@angular/core';
import { ChartsModule,Color } from 'ng2-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  colorarray;
  constructor() { }
  public barChartOptions3:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'TGF KPI: Inventory Levels',
      fontColor:'black',
      fontStyle:'bold',
      fontSize: 20,
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Available Stock(in Units)',
        fontColor:'black',
        fontStyle:'bold',
        fontSize: 15,
      },
      ticks:{
        fontColor:'black',
        fontStyle:'bold',
        min:0,
        stepSize: 100,
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Medicine Names',
        fontColor:'black',
        fontStyle:'bold',
        fontSize: 15,
      },
      ticks:{
        fontColor:'black',
        fontStyle:'bold'
      }
    }]}};
  public barChartLabels3:any[] = ['UnigoldHIVKit','Darunavir','Ritonavir','Raltegravir'];
  public barChartType3:string = 'bar';
  public barChartLegend3:boolean = true;

  public barChartData3:any[] = [
    {data: [240,216, 876,700.8], label: 'Warehouses'},
    {data: [150,72,292,233.6], label: 'Distributing Agents'},
    {data: [200,180,730,584], label: 'End Users'},
    {data: [110,43.2,175.2,60], label: 'Intransit shipment'}
  ];
  public barChartColors:Array<Color>=[
    {
    backgroundColor: ['green','green','green','green'],
  },
  {
    backgroundColor: ['green','green','green','green'],
  },
  {
    backgroundColor: ['green','green','green','green'],
  },
  {
    backgroundColor: ['green','green','green','green'],
  }
  ]
  public barChartOptions4:any = {
    scaleShowVerticalLines: false,
    responsive: true,

    title: {
      display: true,
      text: 'TGF KPI: Health Product Availability at Point of Use',
      fontColor:'black',
      fontStyle:'bold',
      fontSize: 20,
  },
  scales: {
  yAxes: [{
    scaleLabel: {
      display: true,
      labelString: 'Available Stock(in Units)',
      fontColor:'black',
      fontStyle:'bold',
      fontSize: 15,
    },
    ticks:{
      min:0,
      stepSize: 100,
      fontColor:'black',
      fontStyle:'bold'
    }
  }],
  xAxes: [{
    scaleLabel: {
      display: true,
      labelString: 'Medicine names',
      fontColor:'black',
      fontStyle:'bold',
      fontSize: 15,
    },
    ticks:{
      fontColor:'black',
      fontStyle:'bold'
    }
  }]
//   tooltips: {
//     mode: 'index',
//     axis:'x'
// }
}
  };
  public barChartLabels4:any[] = ['UnigoldHIVKit','Darunavir','Ritonavir','Raltegravir'];
  public barChartType4:string = 'bar';
  public barChartLegend4:boolean = true;

  public barChartData4:any[] = [
    {data: [105,150,200,160], label: 'DHO/CHO'},
    {data: [100,180,350,280], label: 'Health Centers'},
    {data: [110,60,180,48], label: 'Clinics'}
  ];
  public barChartColors2:Array<Color>=[
    {
    backgroundColor: ['green','green','green','green'],
  },
  {
    backgroundColor: ['green','green','green','green'],
  },
  {
    backgroundColor: ['green','green','green','green'],
  }];
  public lineChartData:Array<any> = [
    {data: [200,180,730,180,162,657,144,190,400,300,300,730,200,180,730], label: 'Demand Forecast'},
    {data: [70,216,693.5,99,194.4,624.15,300,200,500,200,360,693.5,180,216,693.5], label: 'Actual Shipment'}
    // {data: [200,180,730,180,162,657,144,190,400,300,300,730,200], label: 'Demand Forecast'},
    // {data: [70,216,693.5,99,194.4,624.15,300,200,500,200,360,693.5,180], label: 'Actual Shipment'}
  ];
  public lineChartLabels:Array<any> = ["UnigoldHIVKit;Apr-2017", "Darunavir;Apr-2017", "Ritonavir;Apr-2017", "UnigoldHIVKit;May-2017", "Darunavir;May-2017", "Ritonavir;May-2017","UnigoldHIVKit;Jun-2017", "Darunavir;Jun-2017", "Ritonavir;Jun-2017","UnigoldHIVKit;Jul-2017", "Darunavir;Jul-2017", "Ritonavir;Jul-2017","UnigoldHIVKit;Aug-2017", "Darunavir;Aug-2017", "Ritonavir;Aug-2017",];
  // ['4/1/2017', '5/1/2017', '6/1/2017', '8/1/2017', '9/1/2017','10/1/2017','11/1/2017'];
  // public lineChartLabels1:Array<any> = ['4/1/2017', '5/1/2017', '6/1/2017', '8/1/2017', '9/1/2017','10/1/2017','11/1/2017'];
  // public lineChartLabels:any[] = [
  //   {labels:['January', 'February', 'March'],label:'January'},
  //   {labels:['January', 'February', 'March'],label:'January'},
  //   {labels:['January', 'February', 'March'],label:'January'}];
  public lineChartOptions:any = {
    responsive: true,
    elements: {
      line: {
          tension: 0, // disables bezier curves
      },
      tooltips: {
        mode: 'nearest'
    }
  },
  title: {
    display: true,
    text: 'TGF KPI: Forecast Accuracy for HIV Medicines',
    fontColor:'black',
    fontStyle:'bold',
    fontSize: 20,
},
scales: {
  yAxes: [{
    scaleLabel: {
      display: true,
      labelString: 'Quantity(in Units)',
      fontColor:'black',
      fontStyle:'bold',
      fontSize: 15,
    },
    ticks:{
      fontColor:'black',
      min:0,
      stepSize: 100,
    }
  }],
  xAxes:[

    {

      id:'xAxis1',
      type:"category",
      ticks:{
        fontColor:'black',
        maxRotation: 90,
        minRotation: 90,
        callback:function(label){
          var month = label.split(";")[0];
          var year = label.split(";")[1];
          return month;
        }
      }
    },
    {
      id:'xAxis2',
      type:"category",
      gridLines: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
      ticks:{
        fontColor:'black',
        fontStyle:'bold',
        callback:function(label){
          var month = label.split(";")[0];
          var year = label.split(";")[1];
          if(month === "Darunavir"){
            return year;
          }else{
            return "";
          }
        }
      },

      scaleLabel: {
        display: true,
        fontColor:'black',
        fontStyle:'bold',
        fontSize: 15,
      }

    }],
  // xAxes: [{
  //   scaleLabel: {
  //     display: true,
  //     labelString: 'Date',
  //     fontColor:'black',
  //     fontStyle:'bold',
  //     fontSize: 15,
  //   }
  // }]
// labels: ['January', 'February', 'March']
  //   {labels:['January', 'February', 'March'],label:'January'},
  //   {labels:['January', 'February', 'March'],label:'January'}];

  }};
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
ngOnInit() {
  this.colorarray=[];
  var chartColors = {
    red: 'rgb(255, 0,0)',
    green: 'rgb(76,153,0)',
    blue: '#83c5ed',
    pink:'#efa1b8',
    yellow:'#f8dea2',
    grey:'#ccc'
  };
  var colorValue=100;
  console.log("data",this.barChartData3[0]);
  console.log("barchart",this.barChartColors);
  var dataset=this.barChartData3[0];
   this.colorarray=this.barChartColors[0].backgroundColor;
   console.log(this.colorarray);
  for(var i=0;i<dataset.data.length;i++){
    if(dataset.data[i]<colorValue)
      {
        this.colorarray[i]=chartColors.red;
      }
      else{
        this.colorarray[i]=chartColors.pink;
      }
      }

      var dataset=this.barChartData3[1];
      this.colorarray=this.barChartColors[1].backgroundColor;
      console.log(this.colorarray);
     for(var i=0;i<dataset.data.length;i++){
       if(dataset.data[i]<colorValue)
         {
           this.colorarray[i]=chartColors.red;
         }
         else{
          this.colorarray[i]=chartColors.blue;
        }
         }
         var dataset=this.barChartData3[2];
         this.colorarray=this.barChartColors[2].backgroundColor;
         console.log(this.colorarray);
        for(var i=0;i<dataset.data.length;i++){
          if(dataset.data[i]<colorValue)
            {
              this.colorarray[i]=chartColors.red;
            }
            else{
              this.colorarray[i]=chartColors.yellow;
            }
            }
            var dataset=this.barChartData3[3];
            this.colorarray=this.barChartColors[3].backgroundColor;
            console.log(this.colorarray);
           for(var i=0;i<dataset.data.length;i++){
             if(dataset.data[i]<colorValue)
               {
                 this.colorarray[i]=chartColors.red;
               }
               else{
                 this.colorarray[i]=chartColors.grey;
               }
               }
               var dataset=this.barChartData4[0];
               this.colorarray=this.barChartColors2[0].backgroundColor;
               console.log(this.colorarray);
              for(var i=0;i<dataset.data.length;i++){
                if(dataset.data[i]<colorValue)
                  {
                    this.colorarray[i]=chartColors.red;
                  }
                  else{
                    this.colorarray[i]=chartColors.pink;
                  }
                  }

                  var dataset=this.barChartData4[1];
                  this.colorarray=this.barChartColors2[1].backgroundColor;
                  console.log(this.colorarray);
                 for(var i=0;i<dataset.data.length;i++){
                   if(dataset.data[i]<colorValue)
                     {
                       this.colorarray[i]=chartColors.red;
                     }
                     else{
                      this.colorarray[i]=chartColors.blue;
                    }
                     }
                     var dataset=this.barChartData4[2];
                     this.colorarray=this.barChartColors2[2].backgroundColor;
                     console.log(this.colorarray);
                    for(var i=0;i<dataset.data.length;i++){
                      if(dataset.data[i]<colorValue)
                        {
                          this.colorarray[i]=chartColors.red;
                        }
                        else{
                          this.colorarray[i]=chartColors.yellow;
                        }
                        }
}
} 