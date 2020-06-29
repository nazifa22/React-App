import React, {Component} from 'react';
import {Row, Col} from 'antd';
import { Breadcrumb } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import { TimePicker } from 'antd';
import { DatePicker } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import * as moment from 'moment';
import './Events.css';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

// let Lists = [
//     {
//       "id": 1,
//       "title": "Beach Cleanup",
//       "date": "Aug 28 2018",
//       "time": "10:00",
//       "location": "Daytona Beach",
//       "description": "Let's clean up this beach.",
//       "organizer": "Adam Jahr",
//       "category": "sustainability",
//       "attendees": [
//         {
//           "id": "abc123",
//           "name": "Adam Jahr"
//         },
//         {
//           "id": "def456",
//           "name": "Gregg Pollack"
//         },
//         {
//           "id": "ghi789",
//           "name": "Beth Swanson"
//         },
//         {
//           "id": "jkl101",
//           "name": "Mary Gordon"
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "title": "Park Cleanup",
//       "date": "Nov 12 2018",
//       "time": "12:00",
//       "location": "132 N Magnolia Street, Orlando, Florida",
//       "description": "We're going to clean up this park.",
//       "organizer": "Adam Jahr",
//       "category": "nature",
//       "attendees": [
//         {
//           "id": "ghi789",
//           "name": "Beth Swanson"
//         },
//         {
//           "id": "jkl101",
//           "name": "Mary Gordon"
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "title": "Pet Adoption Day",
//       "date": "Dec 2 2018",
//       "time": "12:00",
//       "location": "132 N Magnolia Street, Orlando, Florida",
//       "description": "Help animals find new homes.",
//       "organizer": "Gregg Pollack",
//       "category": "animal welfare",
//       "attendees": [
//         {
//           "id": "abc123",
//           "name": "Adam Jahr"
//         },
//         {
//           "id": "ghi789",
//           "name": "Beth Swanson"
//         },
//         {
//           "id": "jkl101",
//           "name": "Mary Gordon"
//         }
//       ]
//     },
//     {
//         "id": 4,
//         "title": "Beach Cleanup",
//         "date": "Aug 28 2018",
//         "time": "10:00",
//         "location": "Daytona Beach",
//         "description": "Let's clean up this beach.",
//         "organizer": "Adam Jahr",
//         "category": "sustainability",
//         "attendees": [
//           {
//             "id": "abc123",
//             "name": "Adam Jahr"
//           },
//           {
//             "id": "def456",
//             "name": "Gregg Pollack"
//           },
//           {
//             "id": "ghi789",
//             "name": "Beth Swanson"
//           },
//           {
//             "id": "jkl101",
//             "name": "Mary Gordon"
//           }
//         ]
//       }
// ]

// Lists.map(list => {
//     console.log('list:', list.attendees.length)
// })
class Events extends Component {
        
    constructor() {
        super();
        this.state = {
            time: '',
            date: new Date(),
            location: 'Location',
            attendees: '',
            list: true,
            form: false,
            Lists: [
                {
                  "id": 1,
                  "title": "Beach Cleanup",
                  "date": "Aug 28 2018",
                  "time": "10:00",
                  "location": "Daytona Beach",
                  "description": "Let's clean up this beach.",
                  "organizer": "Adam Jahr",
                  "category": "sustainability",
                  "attendees": 4
                },
                {
                  "id": 2,
                  "title": "Park Cleanup",
                  "date": "Nov 12 2018",
                  "time": "12:00",
                  "location": "132 N Magnolia Street, Orlando, Florida",
                  "description": "We're going to clean up this park.",
                  "organizer": "Adam Jahr",
                  "category": "nature",
                  "attendees": 2
                },
                {
                  "id": 3,
                  "title": "Pet Adoption Day",
                  "date": "Dec 2 2018",
                  "time": "12:00",
                  "location": "132 N Magnolia Street, Orlando, Florida",
                  "description": "Help animals find new homes.",
                  "organizer": "Gregg Pollack",
                  "category": "animal welfare",
                  "attendees": 3
                },
                {
                    "id": 4,
                    "title": "Beach Cleanup",
                    "date": "Aug 28 2018",
                    "time": "10:00",
                    "location": "Daytona Beach",
                    "description": "Let's clean up this beach.",
                    "organizer": "Adam Jahr",
                    "category": "sustainability",
                    "attendees": 4
                  }
            ]
        }
    }

    getTime = (event) => {
        this.setState ({ 
            time: event.target.value
        });
    };

    getDate = (event) => {
        this.setState ({
            date: event.target.value
        })
    };

    getLocation = (event) => {
        this.setState({
            location: event.target.value
        })
    };

    getNumber = (attendees) => {
        this.setState({
            attendees: attendees
        })
    };

    submitEvent() {

        this.showList();
        const Lists = [...this.state.Lists];
        let newUser = {};
        newUser.time = this.state.time;
        newUser.date = this.state.date;
        newUser.location = this.state.location;
        newUser.attendees = this.state.attendees;

        Lists.push(newUser);
        this.setState({
            Lists
        })
        console.log(Lists)
    }

    showList = () => {
        this.setState({
            list: true,
            form: false
        })
    };

    showFrom = () => {
        this.setState({
            list: false,
            form: true
        })
    };

    render() {
        return (
            <div className='events' id="events">
                <div className={`eventBreadcrumb`}>
                    <Row justify='center' align='center'>
                        <Col span={6}>
                            <h2>Real World Events</h2>
                        </Col>
                        <Col span={6}>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <a onClick={this.showList}>List</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a onClick={this.showFrom}>Create</a>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>

                <div className={this.state.list ? 'd-block' : 'd-none'} id="event">
                    {
                        this.state.Lists.map(info => (
                            <Row justify='çenter'>
                                <Col>
                                    <Card style={{ width: '40vw', margin: '20px auto', textAlign: 'left' }}>
                                        <p className='details'>
                                            @{
                                                <span>{info.time}</span>
                                            } 
                                            on {
                                                <span>{info.date}</span>
                                            }
                                        </p>
                                        <Divider dashed />
                                        {
                                            <h3>{info.location}</h3>
                                        }
                                        <Divider dashed />
                                        <p className='users'>
                                            <svg className="svg-icon" viewBox="0 0 20 20">
                                                <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
                                            </svg> &nbsp;
                                            {
                                                // info.attendees.map(subInfo => (
                                                //     <span>{subInfo.name} &nbsp;</span>
                                                // ))
                                                // <span>{info.attendees.length}</span>
                                                <span>{info.attendees}</span>
                                            }
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                        ))
                    }
                </div>
                
                <div className={this.state.form ? 'd-block' : 'd-none'}>
                    <Row justify='center'>
                        <Col span={12}>
                            <Form onSubmit={this.submitEvent}>
                                <h1>Create the Event!</h1>
                                <div>
                                    <span>Set Time: </span>
                                    {/* <TimePicker value={this.state.time} onChange={this.getTime} /> */}
                                    <Input placeholder={this.state.time} onChange={this.getTime} style={{width: 'auto'}}/>
                                </div>
                                <br></br>
                                <div>
                                    <span>Set Date: </span>
                                    {/* <DatePicker defaultValue={moment(this.state.date, dateFormatList)} format={dateFormatList} onChange={this.getDate} /> */}
                                    <Input placeholder={this.state.date} style={{width: 'auto'}} onChange={this.getDate} />
                                </div>
                                <br></br>
                                <div>
                                    <span>Location: </span>
                                    <Input placeholder={this.state.location} style={{width: 'auto'}} onChange={this.getLocation} />
                                </div>
                                <br></br>
                                <div>
                                    <span>Number of Attendees: </span>  
                                    <InputNumber placeholder={this.state.attendees} onChange={this.getNumber} />
                                </div>
                                <br></br>
                                <Button type="dashed" onClick={() => this.submitEvent()}>
                                    Create Event
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

export default Events;