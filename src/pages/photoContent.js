import React from "react"
import AOS from 'aos'

import "../styling/square.css"
import "../styling/scrollText.css"


class PhotoContent extends React.Component {



  render() {

    const styles = {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      item: {
        // width: 200,
        // height: 200,
        // margin: 50,
        // paddingTop: 75,
        // backgroundColor: '#ccc',
        textAlign: 'center',
        color: '#FFF',
        fontSize: '3em',
        display: 'block',
        margin: '0 auto',
        marginBottom: 20,
      }

    }

    return (
      <div>
        <div style={styles.container}>
          
            <img align="middle" src={require("../images/split_head.png")} alt='text'/>

            <img src={require("../images/skull.png")} alt='text'/>

        </div>
      </div>
    )
  }
}

export default PhotoContent;