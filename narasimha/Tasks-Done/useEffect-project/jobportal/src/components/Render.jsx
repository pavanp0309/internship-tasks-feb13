import React from 'react';
import SideBar from './SideBar';
import JobCardList from './JobCardList';

const Render = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-3 mb-4">
                    <SideBar />
                </div>

                <div className="col-12 col-md-7 mb-4">
                    <JobCardList />
                </div>

                <div className="col-12 col-md-2 ">
                    <img
                        className="img-fluid "
                        style={{ height: '350px', width: '100%', position: 'sticky', top: '120px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrU18wsGQOH8ijHVJnjDZoHZWRAe9mO_w2ncZzn1sa4Zvz9nJhOZ0RaVhTNbq1fISTwM&usqp=CAU"
                        alt="Sticky Ad"
                    />
                </div>
            </div>
        </div>
    );
};

export default Render;
