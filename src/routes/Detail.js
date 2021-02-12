import React from 'react';
import Util from '../js/util';

class Detail extends React.Component {
  componentDidMount(){
    console.log(this.props);
    const { location, history } = this.props;
    //console.log(location.state); undefined
    if(location.state === undefined){
      history.push('/');
    }
  }

  render(){
    const { location } = this.props;
    if(!Util.isEmpty(location.state)){
      return <span>{location.state.title}</span>;
    }else{
      return null;
    }
  }
}

export default Detail;