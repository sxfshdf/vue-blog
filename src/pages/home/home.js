import request from '../../helpers/request.js'
import auth from '../../api/auth.js'

auth.getInfo().then(res=>{
  // console.log(res)
})

export default {
  name: "index"
}