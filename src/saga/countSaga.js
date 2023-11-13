import {  put, takeEvery } from 'redux-saga/effects'
import {increment} from '../redux-state/counterSlice'

const delay = (ms) => new Promise(res=>setTimeout(res, ms))


function* incrementWorker (){
  yield delay(1000)
  yield put(increment())
}

function* decrementtWorker (){

}


function* countWatcher (){
  yield takeEvery()
}