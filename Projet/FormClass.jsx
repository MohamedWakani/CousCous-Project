import React, { Component } from 'react'
import Footer from './Footer'
import form from './form'
import formM from './formMeat'
import NavBar from './NavBar'

export default class FormClass extends Component {
  state = {
    kasriya: "../image/kasriya.png",
    showMe: false,
    showMeAgain: false,
    ischeck: true,
    genreC: null,
    cr: '',
    gar3a: '',


  }
  // handelInput = (e) => {
  //   if (e.target.checked) {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     })
  //   } else {
  //     this.setState({
  //       [e.target.name]: 0
  //     })
  //   }
  // }
  // handelSelect = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(this.state.genreC);
  // }
  // componentDidMount=()=> {
  //   if (this.state.genreC == null) {
  //     this.setState({
  //        ischeck: true
  //        });
  //   }else{
  //     this.setState({
  //       ischeck:true
  //       });
  //   }
  // }


  handel = (e) => {
    let select = document.querySelector("select")
    this.setState({
      [e.target.name]: e.target.value,

    })


    if (e.target.checked) {
      this.setState({
        [e.target.name]: e.target.value
      })
    } else if (e.target.checked == 0) {
      this.setState({
        [e.target.name]: 0

      })
    }


    console.log(this.state.cr);
    if (select.value !== "-1") {
      this.setState({
        ischeck: false
      })
    }
    else {
      this.setState({
        ischeck: true
      })
    }
  }
  // ----------------------------------------------------------------------
  click() {
    this.setState({
      showMeAgain: false,
      showMe: true
    })
  }
  clickAgain() {
    this.setState({
      showMe: false,
      showMeAgain: true
    })
  }
  // --------------------------------------Destroy-Function--------------------------------
    destroy=(e)=>{
      this.setState({
        [e.target.name]:0
      })
    }
 //-----------------------------------------------------------------------
  render() {
    return (
      <div className='formClass'>
        <div className=''>
          <NavBar />
          <div className="type">
            <h1>Please choose a type of <span className='spn1'>Cous</span><span>Cous</span>  </h1>
            <a href="#cous"> <button className='btn1' onClick={() => this.click()}>Vegetables CousCous</button></a>
            <a href="#tfaya"><button className='btn2' onClick={() => this.clickAgain()}>CousCous T-faya</button></a>
            <a href="#tfaya"><button className='btn3'>Customize Your Own CousCous</button></a>

          </div><br /><br /><br />
          {/* -------------------------------------------------------------------- */}
          <div className='choose-form'>
            {/* ------------------------------------CousCous/khodra------------------------------------------- */}

            {
              this.state.showMe ?
                <div className='title-cous'>

                  <h1> Vegetables <span className='spn1'>Cous</span><span>Cous</span></h1>
                  <br />
                  <center>
                    <div className='hr'>
                      <hr />
                    </div>
                  </center>
                  <div className='vegetables-form'>

                    <div className="vegetables">
                      <a name="cous"></a>
                      <form action="">
                        <h4>Choose CousCous Type</h4>
                        <select name='genreC' id="type-couscous" onChange={this.handel} >
                          <option value="-1">Choose Your CousCous</option>
                          <option value="../image/cous.png">Smida Ghlida</option>
                          <option value="">Smida R9i9a</option>
                          <option value="">Smida Moyenne</option>
                          <option value="">Dra</option>
                        </select><br /><br />
                        <hr /><br />
                        <h4>Choose Vegetables</h4>
                        {
                          form.map(fr => <div>
                            <input onClick={this.handel} disabled={this.state.ischeck} name={fr.name} value={fr.value} type="checkbox" id={fr.label} /><label htmlFor={fr.label}>{fr.label} <strong>{fr.arabName}</strong></label><br />
                          </div>
                          )
                        }

                        <hr />
                        <br />
                        <h4>Choose The Type Of Meat </h4>
                        {
                          formM.map(frm =>
                            <div>
                              <input onClick={this.handel} disabled={this.state.ischeck} name={frm.name} value={frm.value} type="checkbox" id={frm.label} /><label htmlFor={frm.label}>{frm.label} <strong>{frm.arabName}</strong></label><br />
                            </div>
                          )
                        }
                        <br /><br />
                        <button className='btn1'>Send</button>
                        <button className='btn2' onClick={this.destroy}>Delete</button>
                      </form>
                    </div>



                    <img className='vegeta-img' src={this.state.kasriya} alt="" />
                    <img className='vegeta-img' src={this.state.genreC} alt="" />
                    <img className='vegeta-img' src={this.state.cr} alt="" />
                    <img className='vegeta-img' src={this.state.gar3a} alt="" />



                  </div>

                </div>

                : null
            }

            {/* ------------------------------------CousCous/Tfaya------------------------------------------- */}

            {
              this.state.showMeAgain ?
                <div className='title-cous'>
                  <h1> Tfaya <span className='spn1'>Cous</span><span>Cous</span></h1>
                  <br />
                  <center>
                    <div className='hr'>
                      <hr />
                    </div>
                  </center>
                  <div className='vegetables-form'>

                    <div className="vegetables">
                      <a Name="tfaya"></a>
                      <form action="">
                        <h4>Choose CousCous Type</h4>
                        <select id="type-couscous">
                          <option value="">Choose Your CousCous</option>
                          <option value="">Smida Ghlida</option>
                          <option value="">Smida R9i9a</option>
                          <option value="">Smida Moyenne</option>
                          <option value="">Dra</option>
                        </select><br /><br />
                        <hr /><br />
                        <h4>Choose Vegetables</h4>
                        <input type="checkbox" id="Beans" /><label htmlFor="Beans">Beans</label><br />
                        <input type="checkbox" id="Chickpeas" /><label htmlFor="Chickpeas">Chickpeas</label><br />
                        <input type="checkbox" id="Carrots" /><label htmlFor="Carrots">Carrots</label><br />
                        <input type="checkbox" id="Onions" /><label htmlFor="Onions">Onions</label><br />
                        <input type="checkbox" id="Tomatoes" /><label htmlFor="Tomatoes">Tomatoes</label><br />
                        <input type="checkbox" id="Green Cabbage" /><label htmlFor="Green Cabbage">Green Cabbage</label><br /><br />
                        <hr />
                        <br />
                        <h4>Choose The Type Of Meat </h4>
                        <input type="checkbox" id="Beef" /><label htmlFor="Beef">Beef</label><br />
                        <input type="checkbox" id="Lamb" /><label htmlFor="Lamb">Lamb</label><br />
                        <input type="checkbox" id="Chicken" /><label htmlFor="Chicken">Chicken</label><br /><br />
                        <button className='btn1'>Send</button>
                        <button className='btn2' type='reset'>Delete</button>
                      </form>
                    </div>


                    <img className='vegeta-img' src="../image/kasriya.png" alt="" />


                  </div>

                </div>
                : null
            }
            {/* --------------------------------------------------------------------------------------------- */}

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
