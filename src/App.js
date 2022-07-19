
import './App.css';
import PriceCard from './PriceCard';

function App() {
  
let data = [
  {
    plan : "Free",
    price:'Rs.000',
    user:'Single user',
    isUser:true,
    storage:'5GB Data',
    isStorage:true,
    Publicproject:'Un Limited Public Project',
    isPublicproject:true,
    CommunityAccess:'CommunityAccess',
    isCommunityAccess:true,
    privateproject:'unlimated private project',
    isPrivateproject:false,
    phone:'Dedicated Phone Support',
    isPhone:false,
    Subdomain:'Free subdomain',
    isSubdomain:false,
    Reports:'Monthly Status Reports',
    isReports:false,
  },
  {
    plan : "plus",
    price:'Rs.90',
    user:'5 users',
    isUser:true,
    storage:'50GB Data',
    isStorage:true,
    Publicproject:'Un Limited Public Project',
    isPublicproject:true,
    CommunityAccess:'CommunityAccess',
    isCommunityAccess:true,
    privateproject:'unlimated private project',
    isPrivateproject:true,
    phone:'Dedicated Phone Support',
    isPhone:true,
    Subdomain:'Free subdomain',
    isSubdomain:true,
    Reports:'Monthly Status Reports',
    isReports:false,
  },
  {
    plan : "pro",
    price:'Rs.490',
    user:'multipul user',
    isUser:true,
    storage:'150GB Data',
    isStorage:true,
    Publicproject:'Un Limited Public Project',
    isPublicproject:true,
    CommunityAccess:'CommunityAccess',
    isCommunityAccess:true,
    privateproject:'unlimated private project',
    isPrivateproject:true,
    phone:'Dedicated Phone Support',
    isPhone:true,
    Subdomain:'unlimated Free subdomains',
    isSubdomain:true,
    Reports:'Monthly Status Reports',
    isReports:true,
  },
];
return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
        
         <PriceCard data={data[0]}/>
         <PriceCard data={data[1]}/>
         <PriceCard data={data[2]}/>

        </div>
      </div>
    </section>
  </>

    ;
}

export default App;
