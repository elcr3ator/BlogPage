import React from 'react'
import images from '../../../constants/images';

import './TypeError.css';



function Number(props){
  if(props.isRed){
    return(
      <div className='number numberone' style={{ color: 'var(--color-red)'}}>{props.number}</div>
    )
  }else{
    return(
      <div className='number numberone' style={{ color: 'var(--color-black)'}}>{props.number}</div>
    )
  }
}


function LabelN(props){
  if(!props.isRedN){
    return <div className='field-lable'><p className='animOneNo'>Ваше ім'я</p></div>
  }else{
    return <div className='field-lable-error'><p className='animOne'>Не соромтесь</p></div>
  }
}
function LabelP(props){
  if(!props.isRedP){
    return <div className='field-lable'><p className='animTwoNo'>Ваша посада</p></div>
  }else{
    return <div className='field-lable-error'><p className='animTwo'>Ні, ми не з СБУ</p></div>
  }
}

class TypeError extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      nameInput: '',
      positionInput: '',
      isRedN: false,
      isRedP: false,
    }


    this.handleChangesName = this.handleChangesName.bind(this);
    this.handleChangesPosition = this.handleChangesPosition.bind(this);
    this.useClickOnButton = this.useClickOnButton.bind(this);
    this.isRedFalseN = this.isRedFalseN.bind(this);
    this.isRedFalseP = this.isRedFalseP.bind(this);
  }

  handleChangesName(e){
    this.setState({nameInput: e.target.value});
  }

  handleChangesPosition(e){
    this.setState({positionInput: e.target.value});
  }


  isRedFalseN(){ this.setState({isRedN: false});}
  isRedFalseP(){ this.setState({isRedP: false});}

  
  useClickOnButton(){

    if(this.state.nameInput !== '' && this.state.positionInput !== ''){
      console.log('OKKKKK')
    }
    if(this.state.nameInput === ''){
      this.setState({isRedN: true,});
    }
    if(this.state.positionInput === ''){
      this.setState({isRedP: true});
    }
  }

  

  
  render(){

  return (
    <div className='app__review_mainSubstrate' onClick={(e) => e.stopPropagation()}>
      <div className='mainSubstrate-content'>
          <div className='content-form-arrowSeven'>
            <img src={images.arrowseven} alt="Arrow seven" />
          </div>
        <div className='content-form'>
          <div className='content-form-fields'>
              <div className='form-field'>
                <Number number='01' isRed={this.state.isRedN}/>
                <form className='form-form'>
                  <input type='text' title="Сюди ім'я" onClick={this.isRedFalseN} value={this.state.nameInput} onChange={this.handleChangesName} required></input>
                  <LabelN isRedN={this.state.isRedN} />
                </form>
              </div>
              <div className='form-field'>
                <Number number='02' isRed={this.state.isRedP}/>
                <form className='form-form'>
                  <textarea type='text' title="Тут вашу посаду" onClick={this.isRedFalseP} className='PositionTextArea' value={this.state.positionInput} onChange={this.handleChangesPosition} required></textarea>
                  <LabelP isRedP={this.state.isRedP} />
                </form>
              </div>
          </div>
          <div className='content-buttonandbutton'>
            <div className='buttonandbutton-filebutton'>
                <button >
                    Додати Фото
                </button>
            </div>
            <button className='buttonandbutton-commitbutton' onClick={this.useClickOnButton}>Відправити</button>
          </div>
        </div>
          <div className='content-image'>
            <img src={images.tree} alt='Black tree with white background' />
          </div>
      </div>
    </div>
  )
  }

}

export default TypeError