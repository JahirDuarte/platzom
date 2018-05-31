const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function(){
	it('Sí la palabra termina en "ar", se le quitan esos dos caracteres',function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Sí la palabra inicia con Z, se le añade "pe" al final',function(){
		const translation = platzom("Zorro")
		expect(translation).to.equal("Zorrope")
	})
	it('Sí la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio',function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas',function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})