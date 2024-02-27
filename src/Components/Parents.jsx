const Parents= () => {
    
    return (
    <div class="container"> 
        <div className="athlete_info">
        <h4 className="font-weight-bold py-3 px-5"><u>Parent/Guardian Information</u></h4>
        </div>
        <form className="formy">
            <div class="row my-5">
                <h6 className="font-weight-bold">Name</h6>
                <div className="col pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control"/>
                    <div className="form-text">First Name</div>
                </div>

            </div>
                <div className="col pt-1">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Last Name</div>
                    </div>
                </div>
            </div>

            

            <div class="row my-5">
                <h6 className="font-weight-bold">Home Number</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Cell Number</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">E-mail</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="ex:myname@example.com"/>
                    <div className="form-text">example@example.com</div>
                </div>
            </div>
            </div>
        </form>
  </div>);
};
export default Parents;
