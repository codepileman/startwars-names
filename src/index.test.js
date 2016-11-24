var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names-xy',function(){
    describe('all',function(){
        it('should be array of strings',function(){
            expect(starWars.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item === 'string';
                });
            }
        });

        it('should contain "Luke Skywalker"',function(){
        expect(starWars.all).to.include('Luke Skywalker');
        })
        it('should work!',function(){
            expect(true).to.be.true;
        });  

    });

    describe('random',function(){
        it('should return a random item from the starWars.all',function(){
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });

        it('should return an array of random items if passed number',function(){
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item){
                expect(starWars.all).to.include(item);
            });
        });
       
    });

    
});