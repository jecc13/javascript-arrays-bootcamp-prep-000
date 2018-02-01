var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  return ([element, ...array]);
<<<<<<< HEAD
  // adds "element" to the beginning of the passed array but does NOT mutate the underlying array 
=======
>>>>>>> 13ab84d969ebec2977cab51e8c2ee8a707ec547e
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
<<<<<<< HEAD
  // adds "element" to the beginning of the passed array and DOES mutate the underlying array 
}

function addElementToEndOfArray(array, element) {
  return ([...array, element]); 
  // adds "element" to the end of the passed array but does NOT mutate the underlying array 
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
  // adds "element" to the end of the passed array and DOES mutate the underlying array
}

function accessElementInArray(array, index) {
  return array[index];
  // returns the element at the "index" position of the passed array 
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
  // removes first element from passed array and DOES mutate underlying array 
}

function removeElementFromBeginningOfArray(array) {
  return (array.slice(1));
  // removes first element from passed array but does NOT mutate underlying array 
  // to remove last element using slice, go from 0 to array.length - 1 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); 
  return array;
  // removes last element from passed array and DOES mutate underlying array
}

function removeElementFromEndOfArray(array) {
  return (array.slice(0, array.length - 1));  
  // removes the last element from passed array but does NOT mutate underlying array
}
=======
}


/*

  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })

  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })

  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })

  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  
  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the array with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the array', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];

      removeElementFromBeginningOfArray(array);

      expect(array).to.eql([1, 2, 3]);
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})
*/
>>>>>>> 13ab84d969ebec2977cab51e8c2ee8a707ec547e
