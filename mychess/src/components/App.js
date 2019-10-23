import React from 'react'
import styles from './App.module.css'
let fromId
let selectedText
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            array:[],
            chessIcon:''
        }
    }
    
    handleClick=(e)=>{
        let input=e.target
        let textContent=e.target.textContent
        console.log(textContent)
        console.log(input)
        if(input.innerHTML!==''){
            console.log('ia m in')
            if(this.state.array.length<1){
                fromId=e.target.id
                selectedText=e.target.textContent
                this.setState({
                    array:this.state.array.concat(textContent),
                    chessIcon:input.innerHTML
                })
                e.target.innerHTML=''        
            }else if(selectedText[0]!==textContent[0]){
                console.log(selectedText)
                console.log(textContent)
                let thisId=e.target.id
                if(selectedText=='bsoldier1'||selectedText=='wsoldier'){
                    if(Math.abs(fromId-thisId)==9||Math.abs(fromId-thisId)==7){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }else if(selectedText=='belephant'||selectedText=='welephant'){
                    if(Math.abs(fromId-thisId)%8==0&&Math.abs(Number(thisId)-Number(fromId))<=6){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }else if(selectedText=='bminister'||selectedText=='wminister'){
                    if((Math.abs(Number(thisId)-Number(fromId))%9==0||Math.abs(Number(thisId)-Number(fromId))%7==0)){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }else if(selectedText=='bqueen'||selectedText=='wqueen'){
                    if(((Math.abs(Number(thisId)-Number(fromId))%8==0||Math.abs(Number(thisId)-Number(fromId))<=7||Math.abs(Number(thisId)-Number(fromId))%7==0||Math.abs(Number(thisId)-Number(fromId))%9==0))){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }else if(selectedText=='bking'||selectedText=='wking'){
                    if(((Math.abs(Number(thisId)-Number(fromId))==8||Math.abs(Number(thisId)-Number(fromId))<=1||Math.abs(Number(thisId)-Number(fromId))==7||Math.abs(Number(thisId)-Number(fromId))==9))){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }else if(selectedText=='bhorse'||selectedText=='whorse'){
                    if(Number(fromId)==1){
                        if(thisId==18 ||thisId==11){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==2){
                        if(thisId==17 ||thisId==19||thisId==12){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==3){
                        if(thisId==9 ||thisId==13||thisId==18||thisId==20){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==4){
                        if(thisId==14 ||thisId==10||thisId==19||thisId==21){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==5){
                        if(thisId==15 ||thisId==11||thisId==20||thisId==22){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==6){
                        if(thisId==21 ||thisId==23||thisId==16||thisId==12){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==7){
                        if(thisId==22 ||thisId==24||thisId==13){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==8){
                        if(thisId==23 ||thisId==14){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==9){
                        if(thisId==19 ||thisId==3||thisId==26){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==10){
                        if(thisId==25 ||thisId==27||thisId==4||thisId==20){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==11){
                        if(thisId==5 ||thisId==1||thisId==26||thisId==28||thisId==17||thisId==21){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==12){
                        if(thisId==22 ||thisId==18||thisId==2||thisId==6||thisId==29||thisId==27){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==13){
                        if(thisId==7 ||thisId==3||thisId==23||thisId==19||thisId==30||thisId==28){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==14){
                        if(thisId==8 ||thisId==4||thisId==24||thisId==20||thisId==31||thisId==29){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==15){
                        if(thisId==5 ||thisId==21||thisId==32||thisId==30){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==16){
                        if(thisId==6 ||thisId==31||thisId==22){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==17){
                        if(thisId==2 ||thisId==34||thisId==27||thisId==11){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==18){
                        if(thisId==3 ||thisId==35||thisId==28||thisId==12||thisId==1||thisId==33){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==19){
                        if(thisId==4 ||thisId==2||thisId==25||thisId==29||thisId==13||thisId==9||thisId==36||thisId==34){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==20){
                        if(thisId==37 ||thisId==5||thisId==30||thisId==14||thisId==3||thisId==35||thisId==10||thisId==26){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==21){
                        if(thisId==6 ||thisId==4||thisId==31||thisId==15||thisId==27||thisId==11||thisId==36||thisId==4||thisId==38){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==22){
                        if(thisId==7 ||thisId==39||thisId==16||thisId==32||thisId==5||thisId==37||thisId==12||thisId==28){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==23){
                        if(thisId==8 ||thisId==6||thisId==40||thisId==38||thisId==29||thisId==13){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==24){
                        if(thisId==7 ||thisId==39||thisId==30||thisId==14){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==25){
                        if(thisId==10 ||thisId==42||thisId==35||thisId==19){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==26){
                        if(thisId==11 ||thisId==43||thisId==41||thisId==9||thisId==36||thisId==20){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==27){
                        if(thisId==12 ||thisId==44||thisId==37||thisId==21||thisId==10||thisId==42){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==28){
                        if(thisId==13 ||thisId==45||thisId==38||thisId==22||thisId==11||thisId==43||thisId==34||thisId==18){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==29){
                        if(thisId==14 ||thisId==46||thisId==39||thisId==23||thisId==12||thisId==44||thisId==35||thisId==19){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==30){
                        if(thisId==15 ||thisId==47||thisId==40||thisId==24||thisId==13||thisId==45||thisId==36||thisId==20){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==31){
                        if(thisId==16 ||thisId==14||thisId==46||thisId==48||thisId==21||thisId==37){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==32){
                        if(thisId==22 ||thisId==38||thisId==15||thisId==47){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==33){
                        if(thisId==18 ||thisId==50||thisId==43||thisId==27){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==34){
                        if(thisId==17 ||thisId==49||thisId==44||thisId==28||thisId==51||thisId==19){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==35){
                        if(thisId==20||thisId==52||thisId==50||thisId==18||thisId==41||thisId==25||thisId==45||thisId==29){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==36){
                        if(thisId==21 ||thisId==53||thisId==51||thisId==19||thisId==42||thisId==46||thisId==30){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==37){
                        if(thisId==22 ||thisId==54||thisId==20||thisId==52||thisId==43||thisId==27||thisId==31||thisId==47){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==38){
                        if(thisId==23 ||thisId==55||thisId==53||thisId==21||thisId==44||thisId==28||thisId==48||thisId==32){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==39){
                        if(thisId==24 ||thisId==56||thisId==54||thisId==22||thisId==45||thisId==29){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==40){
                        if(thisId==55||thisId==46||thisId==23||thisId==30){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==41){
                        if(thisId==26 ||thisId==58||thisId==51||thisId==35){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==42){
                        if(thisId==25 ||thisId==27||thisId==57||thisId==59||thisId==52||thisId==36){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==43){
                        if(thisId==28 ||thisId==60||thisId==58||thisId==26||thisId==49||thisId==33||thisId==53||thisId==37){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==44){
                        if(thisId==29 ||thisId==27||thisId==59||thisId==61||thisId==54||thisId==50||thisId==34||thisId==38){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==45){
                        if(thisId==30 ||thisId==62||thisId==55||thisId==39||thisId==28||thisId==60||thisId==51||thisId==35){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==46){
                        if(thisId==31 ||thisId==63||thisId==56||thisId==40||thisId==61||thisId==29||thisId==52||thisId==36){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==47){
                        if(thisId==32 ||thisId==30||thisId==64||thisId==62||thisId==37||thisId==53){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==48){
                        if(thisId==63 ||thisId==31||thisId==54||thisId==38){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==49){
                        if(thisId==34 ||thisId==59||thisId==43){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==50){
                        if(thisId==44 ||thisId==60||thisId==33||thisId==35){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==51){
                        if(thisId==36 ||thisId==34||thisId==57||thisId==41||thisId==61||thisId==45){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==52){
                        if(thisId==46 ||thisId==37||thisId==58||thisId==42||thisId==35||thisId==62){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==53){
                        if(thisId==36 ||thisId==63||thisId==47||thisId==38||thisId==59||thisId==43){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==54){
                        if(thisId==39 ||thisId==64||thisId==60||thisId==44){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==55){
                        if(thisId==40 ||thisId==64||thisId==38||thisId==61){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==56){
                        if(thisId==39 ||thisId==62||thisId==46){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==57){
                        if(thisId==51 ||thisId==42){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==58){
                        if(thisId==41 ||thisId==43||thisId==52){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==59){
                        if(thisId==42 ||thisId==44||thisId==49||thisId==53){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==60){
                        if(thisId==45 ||thisId==43||thisId==50||thisId==54){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==61){
                        if(thisId==46 ||thisId==55||thisId==44||thisId==51){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==62){
                        if(thisId==47 ||thisId==45||thisId==52||thisId==56){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==63){
                        if(thisId==48 ||thisId==46||thisId==53){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                    if(Number(fromId)==64){
                        if(thisId==47 ||e.target.id==54){
                            e.target.innerHTML=this.state.chessIcon
                            this.setState({array:[],chessIcon:''})
                        }
                    }
                }
            }
        }else if(input.innerHTML==''){
            console.log(this.state.chessIcon)
            let textContent=e.target.textContent
            console.log(typeof(e.target.id))
            console.log(e.target.id)
            console.log(fromId)
            if((this.state.array[0]=="wsoldier"&&Number(e.target.id)===(Number(fromId)+8))){
                console.log('i am coming')
                e.target.innerHTML=this.state.chessIcon
                this.setState({array:[],chessIcon:''})
            }else if(this.state.array[0]=="bsoldier1"&&Number(e.target.id)===(Number(fromId)-8)){
                console.log('i am coming')
                e.target.innerHTML=this.state.chessIcon
                this.setState({array:[],chessIcon:''})
            }else if(this.state.array[0]=="bhorse"||this.state.array[0]=="whorse"){
                if(Number(fromId)==1){
                    if(e.target.id==18 ||e.target.id==11){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==2){
                    if(e.target.id==17 ||e.target.id==19||e.target.id==12){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==3){
                    if(e.target.id==9 ||e.target.id==13||e.target.id==18||e.target.id==20){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==4){
                    if(e.target.id==14 ||e.target.id==10||e.target.id==19||e.target.id==21){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==5){
                    if(e.target.id==15 ||e.target.id==11||e.target.id==20||e.target.id==22){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==6){
                    if(e.target.id==21 ||e.target.id==23||e.target.id==16||e.target.id==12){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==7){
                    if(e.target.id==22 ||e.target.id==24||e.target.id==13){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==8){
                    if(e.target.id==23 ||e.target.id==14){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==9){
                    if(e.target.id==19 ||e.target.id==3||e.target.id==26){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==10){
                    if(e.target.id==25 ||e.target.id==27||e.target.id==4||e.target.id==20){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==11){
                    if(e.target.id==5 ||e.target.id==1||e.target.id==26||e.target.id==28||e.target.id==17||e.target.id==21){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==12){
                    if(e.target.id==22 ||e.target.id==18||e.target.id==2||e.target.id==6||e.target.id==29||e.target.id==27){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==13){
                    if(e.target.id==7 ||e.target.id==3||e.target.id==23||e.target.id==19||e.target.id==30||e.target.id==28){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==14){
                    if(e.target.id==8 ||e.target.id==4||e.target.id==24||e.target.id==20||e.target.id==31||e.target.id==29){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==15){
                    if(e.target.id==5 ||e.target.id==21||e.target.id==32||e.target.id==30){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==16){
                    if(e.target.id==6 ||e.target.id==31||e.target.id==22){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==17){
                    if(e.target.id==2 ||e.target.id==34||e.target.id==27||e.target.id==11){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==18){
                    if(e.target.id==3 ||e.target.id==35||e.target.id==28||e.target.id==12||e.target.id==1||e.target.id==33){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==19){
                    if(e.target.id==4 ||e.target.id==2||e.target.id==25||e.target.id==29||e.target.id==13||e.target.id==9||e.target.id==36||e.target.id==34){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==20){
                    if(e.target.id==37 ||e.target.id==5||e.target.id==30||e.target.id==14||e.target.id==3||e.target.id==35||e.target.id==10||e.target.id==26){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==21){
                    if(e.target.id==6 ||e.target.id==4||e.target.id==31||e.target.id==15||e.target.id==27||e.target.id==11||e.target.id==36||e.target.id==4||e.target.id==38){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==22){
                    if(e.target.id==7 ||e.target.id==39||e.target.id==16||e.target.id==32||e.target.id==5||e.target.id==37||e.target.id==12||e.target.id==28){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==23){
                    if(e.target.id==8 ||e.target.id==6||e.target.id==40||e.target.id==38||e.target.id==29||e.target.id==13){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==24){
                    if(e.target.id==7 ||e.target.id==39||e.target.id==30||e.target.id==14){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==25){
                    if(e.target.id==10 ||e.target.id==42||e.target.id==35||e.target.id==19){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==26){
                    if(e.target.id==11 ||e.target.id==43||e.target.id==41||e.target.id==9||e.target.id==36||e.target.id==20){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==27){
                    if(e.target.id==12 ||e.target.id==44||e.target.id==37||e.target.id==21||e.target.id==10||e.target.id==42){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==28){
                    if(e.target.id==13 ||e.target.id==45||e.target.id==38||e.target.id==22||e.target.id==11||e.target.id==43||e.target.id==34||e.target.id==18){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==29){
                    if(e.target.id==14 ||e.target.id==46||e.target.id==39||e.target.id==23||e.target.id==12||e.target.id==44||e.target.id==35||e.target.id==19){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==30){
                    if(e.target.id==15 ||e.target.id==47||e.target.id==40||e.target.id==24||e.target.id==13||e.target.id==45||e.target.id==36||e.target.id==20){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==31){
                    if(e.target.id==16 ||e.target.id==14||e.target.id==46||e.target.id==48||e.target.id==21||e.target.id==37){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==32){
                    if(e.target.id==22 ||e.target.id==38||e.target.id==15||e.target.id==47){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==33){
                    if(e.target.id==18 ||e.target.id==50||e.target.id==43||e.target.id==27){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==34){
                    if(e.target.id==17 ||e.target.id==49||e.target.id==44||e.target.id==28||e.target.id==51||e.target.id==19){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==35){
                    if(e.target.id==20||e.target.id==52||e.target.id==50||e.target.id==18||e.target.id==41||e.target.id==25||e.target.id==45||e.target.id==29){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==36){
                    if(e.target.id==21 ||e.target.id==53||e.target.id==51||e.target.id==19||e.target.id==42||e.target.id==46||e.target.id==30){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==37){
                    if(e.target.id==22 ||e.target.id==54||e.target.id==20||e.target.id==52||e.target.id==43||e.target.id==27||e.target.id==31||e.target.id==47){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==38){
                    if(e.target.id==23 ||e.target.id==55||e.target.id==53||e.target.id==21||e.target.id==44||e.target.id==28||e.target.id==48||e.target.id==32){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==39){
                    if(e.target.id==24 ||e.target.id==56||e.target.id==54||e.target.id==22||e.target.id==45||e.target.id==29){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==40){
                    if(e.target.id==55||e.target.id==46||e.target.id==23||e.target.id==30){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==41){
                    if(e.target.id==26 ||e.target.id==58||e.target.id==51||e.target.id==35){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==42){
                    if(e.target.id==25 ||e.target.id==27||e.target.id==57||e.target.id==59||e.target.id==52||e.target.id==36){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==43){
                    if(e.target.id==28 ||e.target.id==60||e.target.id==58||e.target.id==26||e.target.id==49||e.target.id==33||e.target.id==53||e.target.id==37){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==44){
                    if(e.target.id==29 ||e.target.id==27||e.target.id==59||e.target.id==61||e.target.id==54||e.target.id==50||e.target.id==34||e.target.id==38){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==45){
                    if(e.target.id==30 ||e.target.id==62||e.target.id==55||e.target.id==39||e.target.id==28||e.target.id==60||e.target.id==51||e.target.id==35){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==46){
                    if(e.target.id==31 ||e.target.id==63||e.target.id==56||e.target.id==40||e.target.id==61||e.target.id==29||e.target.id==52||e.target.id==36){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==47){
                    if(e.target.id==32 ||e.target.id==30||e.target.id==64||e.target.id==62||e.target.id==37||e.target.id==53){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==48){
                    if(e.target.id==63 ||e.target.id==31||e.target.id==54||e.target.id==38){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==49){
                    if(e.target.id==34 ||e.target.id==59||e.target.id==43){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==50){
                    if(e.target.id==44 ||e.target.id==60||e.target.id==33||e.target.id==35){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==51){
                    if(e.target.id==36 ||e.target.id==34||e.target.id==57||e.target.id==41||e.target.id==61||e.target.id==45){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==52){
                    if(e.target.id==46 ||e.target.id==37||e.target.id==58||e.target.id==42||e.target.id==35||e.target.id==62){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==53){
                    if(e.target.id==36 ||e.target.id==63||e.target.id==47||e.target.id==38||e.target.id==59||e.target.id==43){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==54){
                    if(e.target.id==39 ||e.target.id==64||e.target.id==60||e.target.id==44){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==55){
                    if(e.target.id==40 ||e.target.id==64||e.target.id==38||e.target.id==61){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==56){
                    if(e.target.id==39 ||e.target.id==62||e.target.id==46){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==57){
                    if(e.target.id==51 ||e.target.id==42){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==58){
                    if(e.target.id==41 ||e.target.id==43||e.target.id==52){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==59){
                    if(e.target.id==42 ||e.target.id==44||e.target.id==49||e.target.id==53){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==60){
                    if(e.target.id==45 ||e.target.id==43||e.target.id==50||e.target.id==54){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==61){
                    if(e.target.id==46 ||e.target.id==55||e.target.id==44||e.target.id==51){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==62){
                    if(e.target.id==47 ||e.target.id==45||e.target.id==52||e.target.id==56){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==63){
                    if(e.target.id==48 ||e.target.id==46||e.target.id==53){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
                if(Number(fromId)==64){
                    if(e.target.id==47 ||e.target.id==54){
                        e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
                    }
                }
            }else if((this.state.array[0]=="bminister"||this.state.array[0]=="wminister")&&(Math.abs(Number(e.target.id)-Number(fromId))%9==0||Math.abs(Number(e.target.id)-Number(fromId))%7==0)){
                e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
            }else if((this.state.array[0]=="belephant"||this.state.array[0]=="welephant")&&(Math.abs(Number(e.target.id)-Number(fromId))%8==0||Math.abs(Number(e.target.id)-Number(fromId))<=6)){
                e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
            }else if((this.state.array[0]=="bqueen"||this.state.array[0]=="wqueen")&&((Math.abs(Number(e.target.id)-Number(fromId))%8==0||Math.abs(Number(e.target.id)-Number(fromId))<=7||Math.abs(Number(e.target.id)-Number(fromId))%7==0||Math.abs(Number(e.target.id)-Number(fromId))%9==0))){
                e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
            }else if((this.state.array[0]=="bking"||this.state.array[0]=="wking")&&((Math.abs(Number(e.target.id)-Number(fromId))==8||Math.abs(Number(e.target.id)-Number(fromId))<=1||Math.abs(Number(e.target.id)-Number(fromId))==7||Math.abs(Number(e.target.id)-Number(fromId))==9))){
                e.target.innerHTML=this.state.chessIcon
                        this.setState({array:[],chessIcon:''})
            }
           
       }  
    }
    componentDidUpdate(){
        console.log(this.state,)
    }
    render(){
        return(
        <React.Fragment>
            <div className={styles.parent}>
                <div id="1" onClick={this.handleClick}><span>welephant</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/rook.png"></img></div>
                <div id="2" onClick={this.handleClick}><span>whorse</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/knight.png"></img></div>
                <div id="3" onClick={this.handleClick}><span>wminister</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/bishop.png"></img></div>
                <div id="4" onClick={this.handleClick}><span>wqueen</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/king.png"/></div>
                <div id="5" onClick={this.handleClick}><span>wking</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/queen.png"></img></div>                
                <div id="6" onClick={this.handleClick}><span>wminister</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/bishop.png"></img></div>
                <div id="7" onClick={this.handleClick}><span>whorse</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/knight.png"></img></div>
                <div id="8" onClick={this.handleClick}><span>welephant</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/rook.png"></img></div>
            </div>
            <div className={styles.parent}>
                <div id="9" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
                <div id="10" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
                <div id="11" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
                <div id="12" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
                <div id="13" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
                <div id="14" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
                <div id="15" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
                <div id="16" onClick={this.handleClick}><span>wsoldier</span><img onClick={this.handleClick} src="https://img.icons8.com/ios/50/000000/pawn.png"/></div>
            </div>
            <div className={styles.parent}>
                <div id="17" onClick={this.handleClick}></div>
                <div id="18" onClick={this.handleClick}></div>
                <div id="19" onClick={this.handleClick}></div>
                <div id="20" onClick={this.handleClick}></div>
                <div id="21" onClick={this.handleClick}></div>
                <div id="22" onClick={this.handleClick}></div>
                <div id="23" onClick={this.handleClick}></div>
                <div id="24" onClick={this.handleClick}></div>
            </div>
            <div className={styles.parent}>
                <div id="25" onClick={this.handleClick}></div>
                <div id="26" onClick={this.handleClick}></div>
                <div id="27" onClick={this.handleClick}></div>
                <div id="28" onClick={this.handleClick}></div>
                <div id="29" onClick={this.handleClick}></div>
                <div id="30" onClick={this.handleClick}></div>
                <div id="31" onClick={this.handleClick}></div>
                <div id="32" onClick={this.handleClick}></div>
            </div>
            <div className={styles.parent}>
                <div id="33" onClick={this.handleClick}></div>
                <div id="34" onClick={this.handleClick}></div>
                <div id="35" onClick={this.handleClick}></div>
                <div id="36" onClick={this.handleClick}></div>
                <div id="37" onClick={this.handleClick}></div>
                <div id="38" onClick={this.handleClick}></div>
                <div id="39" onClick={this.handleClick}></div>
                <div id="40" onClick={this.handleClick}></div>
            </div>
            <div className={styles.parent}>
                <div id="41" onClick={this.handleClick}></div>
                <div id="42" onClick={this.handleClick}></div>
                <div id="43" onClick={this.handleClick}></div>
                <div id="44" onClick={this.handleClick}></div>
                <div id="45" onClick={this.handleClick}></div>
                <div id="46" onClick={this.handleClick}></div>
                <div id="47" onClick={this.handleClick}></div>
                <div id="48" onClick={this.handleClick}></div>
            </div>
            <div className={styles.parent}>
                <div id="49" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
                <div id="50" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
                <div id="51" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
                <div id="52" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
                <div id="53" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
                <div id="54" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
                <div id="55" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
                <div id="56" onClick={this.handleClick}><span>bsoldier1</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/pawn.png"/></div>
            </div>
            <div className={styles.parent}>
                <div id="57" onClick={this.handleClick}><span>belephant</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/rook.png"></img></div>
                <div id="58" onClick={this.handleClick}><span>bhorse</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/knight.png"></img></div>
                <div id="59" onClick={this.handleClick}><span>bminister</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/bishop.png"></img></div>
                <div id="60" onClick={this.handleClick}><span>bqueen</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/king.png"></img></div>
                <div id="61" onClick={this.handleClick}><span>bking</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/queen.png"></img></div>
                <div id="62" onClick={this.handleClick}><span>bminister</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/bishop.png"></img></div>
                <div id="63" onClick={this.handleClick}><span>bhorse</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/knight.png"></img></div>
                <div id="64" onClick={this.handleClick}><span>belephant</span><img onClick={this.handleClick} src="https://img.icons8.com/ios-filled/50/000000/rook.png"></img></div>
            </div>
        </React.Fragment>
        )
    }
} 