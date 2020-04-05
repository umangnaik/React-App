
import React from 'react'
import Footer from '../src/footer'
import Header from '../src/header'

import Page from '../src/page'
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        header: props.header,
        footer: props.footer,
        page: props.page
    }
  }
  render() {
		return (
        // <Header header={this.state.header}/>
        <Page page={this.state.page}></Page>
		);
	}
  }
  export default Contact