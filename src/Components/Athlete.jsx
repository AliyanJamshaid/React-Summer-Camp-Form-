const Athlete = () => {
    
    return (
    <div class="container"> 
        <div className="athlete_info">
        <hr className="hr up" />
        <h4 className="font-weight-bold py-3 px-5">Athlete Information</h4>
        <hr className="hr down" />
        </div>
        <form className="formy">
            <div class="row my-5">
                <h6 className="font-weight-bold">Athlete's Name</h6>
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
                <h6 className="font-weight-bold">Birth Date</h6>
                <div className="col pt-1">
                    <div className="form-outline"> 
                    <select type="text" className="form-select"/>
                    <div className="form-text">Month</div>
                </div>
            </div>
                <div className="col pt-1">
                    <div className="form-outline">
                        <select type="text" className="form-select"/>   
                        <div className="form-text">Day</div>
                    </div>
                </div>

                <div className="col pt-1">
                    <div className="form-outline">
                        <select type="text" className="form-select"/>
                        <div className="form-text">Year</div>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Grade</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="ex:4"/>
                </div>
            </div>
            </div>

            <div class="row mt-5">
                <h6 className="font-weight-bold">Gender</h6>
                <div className="col-12 pt-1">
                    <div className="form-check"> 
                    <input class="form-check-input" type="radio" name="gender" id="male" value="male"/>
                    <label class="form-check-label" for="male">Male</label>
                    </div>
                </div>

                <div className="col-12 pt-1">
                    <div className="form-check"> 
                    <input class="form-check-input" type="radio" name="gender" id="female" value="female"/>
                    <label class="form-check-label" for="female">Female</label>
                    </div>
                </div>

            </div>
           

            <div class="row my-5">
                <h6 className="font-weight-bold">Address</h6>
                <div className="col-12 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control"/>
                    <div className="form-text">Street Address</div>
                    </div>
                </div>

                <div className="col-12 pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Street Address Line 2</div>
                    </div>
                </div>

                <div className="col pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">City</div>
                    </div>
                </div>
                <div className="col pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">State / Province</div>
                    </div>
                </div>

                <div className="col-12 pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Postal / ZipCode</div>
                    </div>
                </div>
            </div>

        </form>
  </div>);
};
export default Athlete;
