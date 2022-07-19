import React from 'react';


function PriceCard(props) {
  console.log(props.data)  
    return <>

          {/* <!-- Free Tier -->*/}
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">{props.data.price}<span className="period"></span></h6>
            <hr/>
            <ul className="fa-ul">
              
              <li className={props.data.isUser?"":"text-muted"}><span className="fa-li"><i className={props.data.isUser?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
              <li className={props.data.isStorage?"":"text-muted"}><span className="fa-li"><i className={props.data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.isPublicproject?"":"text-muted"}><span className="fa-li"><i className={props.data.isPublicproject?"fas fa-check":"fas fa-times"}></i></span>{props.data.Publicproject}</li>
              <li className={props.data.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i  className={props.data.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{props.data.CommunityAccess}</li>
              <li className={props.data.isPrivateproject?"":"text-muted"}><span className="fa-li"><i className={props.data.isPrivateproject?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateproject}
               </li>
              <li className={props.data.isPhone?"":"text-muted"}><span className="fa-li"><i className={props.data.isPhone?"fas fa-check":"fas fa-times"} ></i></span>{props.data.phone}
                </li>
              <li className={props.data.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={props.data.isSubdomain?"fas fa-check":"fas fa-times"} ></i></span>{props.data.Subdomain}
              </li>
              <li className={props.data.isReports?"":"text-muted"}><span className="fa-li"><i className={props.data.isReports?"fas fa-check":"fas fa-times"}></i></span>{props.data.Reports}
                </li>
            </ul>
            <div className="d-grid">
              <a href="https://cdnjs.com/libraries/font-awesome" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default PriceCard