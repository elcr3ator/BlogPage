import React from 'react'
import images from '../../../constants/images';

import './TypeReview.css';



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
    return <div className='field-lable'><p className='animSlideDownOne'>Ваше ім'я</p></div>
  }else{
    return <div className='field-lable-error'><p className='animSlideUp'>Не соромтесь</p></div>
  }
}
function LabelP(props){
  if(!props.isRedP){
    return <div className='field-lable'><p className='animSlideDownTwo'>Ваша посада</p></div>
  }else{
    return <div className='field-lable-error'><p className='animSlideUp'>Ні, ми не з СБУ</p></div>
  }
}
function LabelCN(props){
  if(!props.isRedCN){
    return <div className='field-lable'><p className='animSlideDownThree'>Назва вашої компанії</p></div>
  }else{
    return <div className='field-lable-error'><p className='animSlideUp'>Навіщо? А вам скажи</p></div>
  }
}
function LabelR(props){
  if(!props.isRedR){
    return <div className='field-lable'><p className='animSlideDownFour'>Ваш відгук</p></div>
  }else{
    return <div className='field-lable-error'><p className='animSlideUp'>Давайте, ми витрамаємо</p></div>
  }
}

class TypeReview extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      nameInput: '',
      positionInput: '',
      companyNameInput: '',
      reviewInput: '',
      isRedN: false,
      isRedP: false,
      isRedCN: false,
      isRedR: false,
      wasClicked: 0,
      selectRate: null,
      hoveredRate: null,
      starsIsRed: 'var(--color-bigfmasignandgreystars)'
    }


    this.handleChangesName = this.handleChangesName.bind(this);
    this.handleChangesPosition = this.handleChangesPosition.bind(this);
    this.handleChangesCompanyName = this.handleChangesCompanyName.bind(this);
    this.handleChangesReview = this.handleChangesReview.bind(this);
    this.useClickOnButton = this.useClickOnButton.bind(this);
    this.isRedFalseN = this.isRedFalseN.bind(this);
    this.isRedFalseP = this.isRedFalseP.bind(this);
    this.isRedFalseCN = this.isRedFalseCN.bind(this);
    this.isRedFalseR = this.isRedFalseR.bind(this);
    this.StarRate = this.StarRate.bind(this);
  }

  handleChangesName(e){
    this.setState({nameInput: e.target.value});
  }

  handleChangesPosition(e){
    this.setState({positionInput: e.target.value});
  }

  handleChangesCompanyName(e){
    this.setState({companyNameInput: e.target.value});
  }

  handleChangesReview(e){
    this.setState({reviewInput: e.target.value});
  }
  
  isRedFalseN(){ this.setState({isRedN: false});}
  isRedFalseP(){ this.setState({isRedP: false});}
  isRedFalseCN(){ this.setState({isRedCN: false});}
  isRedFalseR(){ this.setState({isRedR: false});}

  
  useClickOnButton(){

    if(this.state.nameInput !== '' && this.state.positionInput !== '' && this.state.companyNameInput !== '' && this.state.reviewInput !== '' && this.state.selectRate !== null){
      console.log('OKKKKK')
    }
    if(this.state.nameInput === ''){
      this.setState({isRedN: true,});
    }
    if(this.state.positionInput === ''){
      this.setState({isRedP: true});
    }
    if(this.state.companyNameInput === ''){
      this.setState({isRedCN: true});
    }
    if(this.state.reviewInput === ''){
      this.setState({isRedR: true});
    }
    if(this.state.selectRate === null){
      this.setState({starsIsRed: 'var(--color-red)'})
      this.setState({wasClicked: 0});
    }
  }

  
  StarRate(){
    const possibleRates = [1, 2, 3, 4, 5];
  
    return(
      possibleRates.map( (rate) => 
        <svg 
          viewBox="0 0 41 39" 
          id={(rate <= this.state.selectRate ? 'in-rate' : '') + (rate <= this.state.hoveredRate ? 'in-hover' : '')} 
          key={rate}
          onClick={() => {this.setState({selectRate: rate}); this.setState({wasClicked: rate})}}
          style={{fill: this.state.starsIsRed}}
          onMouseEnter={() => {this.setState({hoveredRate: rate}); this.setState({selectRate: null}); this.setState({starsIsRed: 'var(--color-bigfmasignandgreystars)'})}}
          onMouseLeave={() => this.setState({hoveredRate: null})}>
        <path d="M18.23,2.01c0.71-2.2,3.82-2.2,4.54,0l3.09,9.5c0.32,0.98,1.24,1.65,2.27,1.65h9.99c2.31,0,3.27,2.96,1.4,4.31
        l-8.08,5.87c-0.84,0.61-1.19,1.68-0.87,2.67l3.09,9.5c0.71,2.2-1.8,4.02-3.67,2.67L21.9,32.3c-0.84-0.61-1.97-0.61-2.8,0l-8.08,5.87
        c-1.87,1.36-4.38-0.47-3.67-2.67l3.09-9.5c0.32-0.98-0.03-2.06-0.87-2.67l-8.08-5.87c-1.87-1.36-0.91-4.31,1.4-4.31h9.99
        c1.03,0,1.95-0.67,2.27-1.65L18.23,2.01z" />
      </svg>  
      )
    )
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
                  <input type='text' title="Тут вашу посаду" onClick={this.isRedFalseP} className='PositionInput' value={this.state.positionInput} onChange={this.handleChangesPosition} required></input>
                  <LabelP isRedP={this.state.isRedP} />
                </form>
              </div>
              <div className='form-field'>
                <Number number='03' isRed={this.state.isRedCN}/>
                <form className='form-form'>
                  <input type='text' title="Всі пам'ятають компанію де вони працюють?" onClick={this.isRedFalseCN} className='CompanyNameInput' value={this.state.companyNameInput} onChange={this.handleChangesCompanyName} required></input>
                  <LabelCN isRedCN={this.state.isRedCN} />
                </form>
              </div>
              <div className='form-field'>
                <Number number='04' isRed={this.state.isRedR}/>
                <form className='form-form'>
                  <input type='text' title="Будьте чемними" onClick={this.isRedFalseR} className='ReviewInput' value={this.state.reviewInput} onChange={this.handleChangesReview} required></input>
                  <LabelR isRedR={this.state.isRedR} />
                </form>
              </div>
          </div>
          <div className='content-starandbutton'>
            <div className='starandbutton-starrate'>
              <this.StarRate />
            </div>
            <button className='starandbutton-button' onClick={this.useClickOnButton}>Відправити</button>
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

export default TypeReview