
import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground,Image,StyleSheet } from 'react-native';

import { stiloCronometro,logoMarca } from "../estilos/estilos";

class Cronometro extends Component {

    
    constructor(props){
        super(props)
        this.state={
            
            vaiPausa:'Vai',
            ZeraSalvar:'Zerar',
            timer: null, 
            hora:0,
            minutos:0,
            segundos:0, // equivale a nunber

            nRegistro:0,
            tempoS:0,
            tempoM:0,
            tempoH:0,
            listatempo:[],
            listaRegistro:[],


        }
       
        
        this.VaiEpausaCont=this.VaiEpausaCont.bind(this)

        this.zeraSalvar=this.zeraSalvar.bind(this)
    }
   
    VaiEpausaCont(){
        if(this.state.timer == null ){
            this.setState({vaiPausa:'Pausar'})
            this.setState({ZeraSalvar:'Salvar e Zerar'})
            
               
                
        this.state.timer = setInterval(() => {
            let novostate = this.state;
            novostate.segundos += 1;
            let minuto = this.setState(novostate);

          if(novostate.segundos == 60){
              novostate.minutos += 1;
              novostate.segundos = 0;
              this.setState(novostate);

          }
          if(novostate.minutos ==60){
              novostate.hora +=1;
              novostate.minutos = 0;
              this.setState(novostate);
          }
                 

            
          
            
        }, 1000)
        

           
        }else{
           
            clearInterval(this.state.timer);
            let novostate = this.state;
            novostate.timer = null;
            this.setState(novostate)
            this.setState({vaiPausa:'Vai'})
            
           
        }

       
    };

    zeraSalvar(){
        clearInterval(this.state.timer);
            // o codigo abaixo vai  definir timer como null
            // zerar os a contagem dos segundos
            let novostate = this.state;
            novostate.timer = null;
            
            this.setState(novostate)

            /** o codigo abaixo vai registar a quantidade de 
             * vezes que foi feito uma contagem de tempo, e exibi-lo abaixo do texo N° 
             * vai também alterar os textos dos botoes
             */
        let numDReg = this.state;
        numDReg.nRegistro += 1;
        this.setState(numDReg);          
        this.setState({ZeraSalvar:'Zerar'})
        this.setState({vaiPausa:'vai'})

        /** o codigo abaixo vai salvar o tempo corrido no cronometro,
         * e armazenar na variavel tempo, e vai exibila abaixo do texto Tempo
         */
        let numDTempo = this.state;
        numDTempo.tempoS = this.state.segundos;
        this.setState({numDTempo});

        
        numDTempo.tempoM = this.state.minutos;
        this.setState({numDTempo});

        
        numDTempo.tempoH = this.state.hora;
        this.setState({numDTempo});
        
        // o codigo abaixo vai redefinir o state segundos para 0
        novostate.segundos = 0;
        novostate.minutos = 0;
        novostate.hora = 0;


    }

    
    render() {
        let imagfundo = require('./atleta.jpg');
        return (
            <View style={stiloCronometro.container}>
            
                <ImageBackground source={imagfundo} style={logoMarca.imgbackground} > 
               
                          
                <Text style={logoMarca.textLogo}>ReactSports</Text>
                


                </ImageBackground>
                


                <View style={stiloCronometro.containerContagemLogo}>
                   
                    <View style={{flexDirection:'row'}}>
                    <Text style={[stiloCronometro.margin20px,stiloCronometro.contagemText]}>{this.state.hora}:</Text>
                    <Text style={[stiloCronometro.margin20px,stiloCronometro.contagemText]}>{this.state.minutos}:</Text>
                    <Text style={[stiloCronometro.margin20px,stiloCronometro.contagemText]}>{this.state.segundos}seg</Text>
                    </View>
                    
                </View>

                <View style={stiloCronometro.botaoCronometroalinhaH}>
                    <TouchableOpacity onPress={this.VaiEpausaCont} 
                   
                    style={stiloCronometro.botaoFlexHorizo}>
                        <Text style={stiloCronometro.botaoText}>{this.state.vaiPausa}</Text>
                     </TouchableOpacity>
                     
                     
                     <TouchableOpacity 
                     onPress={this.zeraSalvar}
                     style={stiloCronometro.botaoFlexHorizo}>
                     <Text style={stiloCronometro.botaoText}>{this.state.ZeraSalvar}</Text>
                     </TouchableOpacity>
                </View>

                <View style={stiloCronometro.nRtempContainer}>
                <View style={{marginRight:60}}>
                    <Text>{this.props.labelRegistro}</Text>
                    <Text  style={{fontWeight:"800"}}>{this.state.nRegistro}</Text>
                </View>
                <View style={{marginRight:20}} >
                    <Text >{this.props.labelTempo}</Text>
                    
                    
                    <Text style={{fontWeight:"800"}}>{this.state.tempoH +":"+ this.state.tempoM +":"+ this.state.tempoS}</Text>
                </View>
                </View>
            </View>


        )
    }
}

export default Cronometro;