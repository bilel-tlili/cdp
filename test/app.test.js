
import assert  from 'assert'
import filter from '../src/commands/filter.js'
import count  from '../src/commands/count.js'
import data from "../data.js"
import constants  from './constants.js'






// count tests 
describe("Count Test ",   function () {
describe("Output Test",   function () {
    it("It should print the counts of People and Animals by counting the number of children and appending it in the name ", function () {


  
       const actual =  count(data) ;

      
     assert.strict.deepEqual( actual,constants.RESULT2) ;

    });
})  ;


describe("Length Test ",   function () {
    it("The count result should has the same length of 'data.js' ", function () {


    const actual_length =  count(data).length ;
    const expected_length =  data.length ;
    assert.strict.equal( actual_length, expected_length) ;

    });
});
})


describe("Filter Test ", function () {
    describe("Output Test", function () {
    it("Only animals containing `ry` are displayed ", function () {

    assert.strict.deepStrictEqual(filter(data,'ry'),constants.RESULT1) ;

    });
});
describe("Output Test", function () {
  it("No filter applied, it should return all data ", function () {

  assert.strict.deepStrictEqual(filter(data,''),constants.RESULT1) ;

  });
});

describe("Length Test", function () {
    it("The filtred data is empty table ", function () {



    assert.strict.deepStrictEqual(filter(data,'test'),[]) ;

    });
});

})

// Arguments tests  


describe("Integration Test" , () => {


    describe("Arguments Test" , () => {
    it("check the number of arguments" , () => {


   

    })
})


describe("Valid Command" , () => {
    it("check if the command is valid" , () => {


        

    })
})
}) 
