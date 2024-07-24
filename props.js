import react from 'react';
import reactDOM from 'react-dom';

function Card(props){
  return(
<>
  <div className='divs'>
    <div className='div'>
      <img src={props.imgsrc}></img>
      <div className='info'>{props.title}</div>
      <div className='btn'>
        <a href={props.btnsrc}>
          <button>Click Me</button>
        </a>
      </div>
    </div>
  </div>
  </>
  );
}

reactDOM.render(
  <>
  <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKo1Jg5o_Ij9xu4xLjEfN93nK_XIwwg4NvA&s'
    title='DELHI CRIME'
    btnsrc='https://www.netflix.com/in/title/81076756' />
  <Card/>
    </>,document.getElementById('root')
)