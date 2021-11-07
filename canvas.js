var canvas=document.getElementById("micanvas")
var ctx=canvas.getContext("2d")

var star=0

var vidas=3
var score=0
var auxscore=0

var nave=new Image()

var ancNave=37
var altNave=37

var xNave=(400-ancNave)/2
var yNave=canvas.height-57
nave.src="nave.png"

var logo=new Image()

var ancLogo=316
var altLogo=159

logo.src="logo.png"

var naves=new Image()

naves.src="naves.png"

var naveDisparo
var banderaExplosionNave=0

nave.onload=function(){

	setInterval(dibuja,100)
	
}

var navesFile=[

	[362,66,3,8],
	[9,185,13,10],
	[33,185,13,10],
	[9,161,13,10],
	[33,161,13,10],
	[8,135,15,16],
	[32,134,15,16],
	[193,223,30,30],
	[217,223,30,30],
	[249,223,30,30],
	[289,223,30,30],
	[201,62,30,32],
	[241,62,30,32],
	[281,62,30,32],
	[321,62,30,32]

]

var disparos=-1
var totalDisparos=3

var xDisparo=[]
var yDisparo=[]

var xDisparoEnemigo=null
var yDisparoEnemigo=null

var xNave01=[30,70,110,150,190,230,270,310,350,30,70,110,150,190,230,270,310,350]
var xNave02=[110,150,190,230,270]
var xNave03=[150,190,230]

var yNave01=[130,130,130,130,130,130,130,130,130,180,180,180,180,180,180,180,180,180]
var yNave02=[80,80,80,80,80]
var yNave03=[20,20,20]

var Naves01=xNave01.length
var Naves02=xNave02.length
var Naves03=xNave03.length

var banderaExplosion=0

var time=0

var xExplosion
var yExplosion

var banderaPerdioVida=0

function dibujarDisparo(){	

	if(yDisparo[0]<0){

		disparos--
		xDisparo.splice(0,1)
		yDisparo.splice(0,1)
	}
	
	for (var i = 0; i <= disparos; i++){

		ctx.drawImage(naves,navesFile[0][0],navesFile[0][1],navesFile[0][2],navesFile[0][3],xDisparo[i],yDisparo[i],navesFile[0][2],navesFile[0][3])
		yDisparo[i]-=15

		for (var j = 0; j < Naves01; j++ ) {
			
			if ( xNave01[j] < xDisparo[i] && xNave01[j]+13*2.5 > xDisparo[i] && yDisparo[i] < yNave01[j]+10){
				
				xExplosion=xNave01[j]
				yExplosion=yNave01[j]

				Naves01--
				xNave01.splice(j,1)
				yNave01.splice(j,1)

				disparos--
				xDisparo.splice(i,1)
				yDisparo.splice(i,1)

				banderaExplosion=1
				auxscore=100
			}
		}

		for (var j = 0; j < Naves02; j++ ) {

			if ( xNave02[j] < xDisparo[i] && xNave02[j]+13*2.5 > xDisparo[i] && yDisparo[i] < yNave02[j]+10){

				xExplosion=xNave02[j]
				yExplosion=yNave02[j]

				Naves02--
				xNave02.splice(j,1)
				yNave02.splice(j,1)

				disparos--
				xDisparo.splice(i,1)
				yDisparo.splice(i,1)

				banderaExplosion=1
				auxscore=200
			}
		}

		for (var j = 0; j < Naves03; j++ ) {

			if ( xNave03[j] < xDisparo[i] && xNave03[j]+16*2.5 > xDisparo[i] && yDisparo[i] < yNave03[j]+16){

				xExplosion=xNave03[j]
				yExplosion=yNave03[j]

				Naves03--
				xNave03.splice(j,1)
				yNave03.splice(j,1)

				disparos--
				xDisparo.splice(i,1)
				yDisparo.splice(i,1)

				banderaExplosion=1
				auxscore=300

			}
		}
	}
}

function dibujaExplosion(){

	var animacion=banderaExplosion+6
	ctx.drawImage(naves,navesFile[animacion][0],navesFile[animacion][1],navesFile[animacion][2],navesFile[animacion][3],xExplosion,yExplosion,navesFile[animacion][2],navesFile[animacion][3])
}

function dibujaNave(){
	
	ctx.drawImage(nave,xNave,canvas.height-altNave-20,ancNave,altNave)
	
}

function dibujaNave01(x,y){

	var animacion=((time%2)+1)
	ctx.drawImage(naves,navesFile[animacion][0],navesFile[animacion][1],navesFile[animacion][2],navesFile[animacion][3],x,y,navesFile[animacion][2]*2.5,navesFile[animacion][3]*2.5)
}

function dibujaNave02(x,y){

	var animacion=((time%2)+3)
	ctx.drawImage(naves,navesFile[animacion][0],navesFile[animacion][1],navesFile[animacion][2],navesFile[animacion][3],x,y,navesFile[animacion][2]*2.5,navesFile[animacion][3]*2.5)
}

function dibujaNave03(x,y){

	var animacion=((time%2)+5)
	ctx.drawImage(naves,navesFile[animacion][0],navesFile[animacion][1],navesFile[animacion][2],navesFile[animacion][3],x,y,navesFile[animacion][2]*2.5,navesFile[animacion][3]*2.5)
}

function dibujaLogo(){
	
	ctx.drawImage(logo,425,25,ancLogo/2,altLogo/2)
	
}

function dibujaVidas(){

	for (var i = 0 ; i < vidas; i++) {

		ctx.drawImage(nave,ancNave*i+425,yNave,ancNave,altNave)

	}
	
}

function dibujaDisparoEnemigo() {

	ctx.drawImage(naves,navesFile[0][0],navesFile[0][1],navesFile[0][2],navesFile[0][3],xDisparoEnemigo,yDisparoEnemigo,navesFile[0][2],navesFile[0][3])
	yDisparoEnemigo+=15


	if ( xDisparoEnemigo > xNave && xDisparoEnemigo < xNave+ancNave && yDisparoEnemigo > yNave && yDisparoEnemigo < yNave+altNave ) {

			banderaPerdioVida=1
	}

	if( yDisparoEnemigo > 600 || ( xDisparoEnemigo > xNave && xDisparoEnemigo < xNave+ancNave && yDisparoEnemigo > yNave && yDisparoEnemigo < yNave+altNave ) ){

		xDisparoEnemigo=null
		yDisparoEnemigo=null
	}

}

function dibujaExplosionNave(){

	var animacion=banderaExplosionNave+11
	ctx.drawImage(naves,navesFile[animacion][0],navesFile[animacion][1],navesFile[animacion][2],navesFile[animacion][3],xNave,yNave,37,37)

}

function dibuja(){

	if ( vidas >= -1 && banderaExplosionNave != 4) {

		if ( Naves01 > 0 || Naves02 > 0 || Naves03 > 0 ) {

			ctx.clearRect(0,0,canvas.width,canvas.height)

			if ( banderaExplosionNave > 0 ) {

				dibujaExplosionNave()

				banderaExplosionNave++

				if ( banderaExplosionNave > 3 && vidas >= 0 ) {

					banderaExplosionNave=0
					xNave=(400-ancNave)/2
					yNave=canvas.height-57
				}

			} else

				dibujaNave()

			if (disparos < totalDisparos && disparos >= 0)

				dibujarDisparo()

			for (var i = 0; i < Naves01; i++)

				dibujaNave01(xNave01[i],yNave01[i])

			for (var i = 0; i < Naves02; i++)

				dibujaNave02(xNave02[i],yNave02[i])
			
			for (var i = 0; i < Naves03; i++)

				dibujaNave03(xNave03[i],yNave03[i])

			if (banderaExplosion > 0) {

				dibujaExplosion()

				if (banderaExplosion == 1)

					score+=auxscore

				banderaExplosion++

				if (banderaExplosion > 4)

					banderaExplosion=0
			}

			ctx.rect(400,0,2,canvas.height)
			
			ctx.fillStyle="#ffffff"
			ctx.fill()

			ctx.rect(402,0,200,canvas.height)
			
			ctx.fillStyle="#000000"
			ctx.fill()

			dibujaLogo()
			dibujaVidas()

			if (time%40==39) {
					
				naveDisparo=Math.ceil( Math.random()*2)

				if ( naveDisparo == 0 ) {

					aveDisparo=Math.ceil( Math.random()*( Naves01-1 ) )
					xDisparoEnemigo=xNave01[naveDisparo]+13
					yDisparoEnemigo=yNave01[naveDisparo]

				} else if ( naveDisparo == 1 ) {

					naveDisparo=Math.ceil( Math.random()*( Naves02-1 ) )
					xDisparoEnemigo=xNave02[naveDisparo]+13
					yDisparoEnemigo=yNave02[naveDisparo]

				} else if ( naveDisparo == 2 ) {

					naveDisparo=Math.ceil(Math.random()*( Naves03-1 ) )
					xDisparoEnemigo=xNave03[naveDisparo]+14
					yDisparoEnemigo=yNave03[naveDisparo]
				}
			}

			if (xDisparoEnemigo   && star > 0 ) {

				dibujaDisparoEnemigo()
			} 

			if (banderaPerdioVida == 1) {

				banderaExplosionNave=1
				banderaPerdioVida=0
				vidas--
			}

			if ( star != 0 )
			
				time++

			if (time > 600)

				time = 0

		} else {

			ctx.font="40px Impact"
			ctx.fillStyle="white"
			ctx.fillText("YOU WIN",100,300)
		}

		ctx.font="20px Franklin Gothic"
		ctx.fillStyle="red"
		ctx.fillText("H I G H",480,130)
		ctx.fillText("S C O R E",495,150)
		ctx.fillStyle="white"
		ctx.fillText("3 7 0 0",495,170)
		ctx.fillText(score,550,240)

		ctx.font="10px"
		ctx.fillText("Espacio para disparar.",400,300)
		ctx.fillText("Flecha de direcciones",400,320)
		ctx.fillText("laterales para",400,340)
		ctx.fillText("desplazamiento <- ->.",400,360)

		if (star == 0 ) {

			ctx.font="10px"
			ctx.fillText("Dispare o mueva la",400,400)
			ctx.fillText("nave para iniciar la ",400,420)
			ctx.fillText("partida.",400,440)
			ctx.fillText("Buena suerte",400,460)
		}

	} else if ( vidas == -1 ) {vghfghfgh 

		ctx.font="40px Impact"
		ctx.fillStyle="white"
		ctx.fillText("GAMER OVER",100,300)

		vidas--
	}
}

document.addEventListener("keydown",detectarAbajo,false)
document.addEventListener("keyup",detectarArriba,false)

function detectarAbajo(e){
	//console.log("Abajo",e.keyCode)
	
	if(e.keyCode==37 && xNave > 0 ){
		
		xNave-=15

		star=1
	}

	if(e.keyCode==39 && xNave < 363 ){
		
		xNave+=15

		star=1
	}
	
	if(e.keyCode==32 && disparos+1 < totalDisparos && disparos >= -1){
		
		disparos++
		xDisparo[disparos]=xNave+16
		yDisparo[disparos]=yNave

		star=1
	}
}


function detectarArriba(e){
	//console.log("Up")
}