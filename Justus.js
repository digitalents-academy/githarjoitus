const rps = (p1, p2) => {
    if(p1==='scissors'&& p2==='paper'){
      return 'Player 1 won!';
    }else if(p1==='scissors'&& p2==='rock'){
      return 'Player 2 won!';
    }else if(p1==='scissors'&& p2==='scissors'){
     return 'Draw!';
    }else if(p1==='rock'&& p2==='scissors'){
      return 'Player 1 won!';
    }else if(p1==='rock'&& p2==='paper'){
      return 'Player 2 won!';
    }else if(p1==='rock'&& p2==='rock'){
      return 'Draw!';
    }else if(p1==='paper'&& p2==='rock'){
      return 'Player 1 won!';
    }else if(p1==='paper'&& p2==='scissors'){
      return 'Player 2 won!';
    }else {
      return 'Draw!';
    }
  };

const toUpperCase = 'Miten meni omasta mielestä?'
console.log(sentence.toUpperCase());
