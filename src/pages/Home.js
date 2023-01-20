import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
function Home() {
  return (
    <>
    <Main/>
    <Row rowId='1' title='UpComing'fetchURL={requests.requestUpcoming}/>
    <Row rowId='2' title='Popular'fetchURL={requests.requestPopular}/>
    <Row rowId='3' title='Top Rated'fetchURL={requests.requestTopRated}/>
    <Row rowId='4' title='Trending'fetchURL={requests.requestTrending}/>
    <Row rowId='5' title='Action'fetchURL={requests.requestAction}/>

    {/* <Row title='Latest'fetchURL={requests.requestLatest}/> */}


    </>
  )
}

export default Home