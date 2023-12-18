import React, { useEffect,useState } from 'react'
import './DashBoard.css'
import recent_foto from '../Assets/recent.svg'
import leftArrow from '../Assets/leftArrow.svg'
import rightArrow from '../Assets/rightArrow.svg'
import notif from '../Assets/notif.svg'
import profile from '../Assets/profile.svg'
import dashboardIcon from '../Assets/dashboardIcon.svg'
import homeIcon from '../Assets/homeIcon.svg'
import calenderIcon from '../Assets/calendarIcon.svg'
import fileIcon from '../Assets/fileIcon.svg'
import toga from '../Assets/toga.svg'
import TimelineHistory from '../Assets/TimelineHistory.svg'
import TimelineFilter from '../Assets/TimelineFilter.svg'
import TimelinePic from '../Assets/TimelinePic.svg'
import eventIcon from '../Assets/EventsIcon.svg'
import Calendar from 'react-calendar'
import '../Dashboard/calendar.css'

const DashBoard = () => {
    useEffect(() =>{
        document.title = 'Dashboard'
    }, [])
    
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date())

  return (
        <div className="Main">
            <div className="sidebar-parent">  
                <div className="sidebar">
                    <div className="menuSide">
                        <a href="/dashboard" className='dashboard-btn'><img src={dashboardIcon} alt="" />Dashboard</a>
                        <a href="/dashboard" className='siteHome-btn'><img src={homeIcon} alt="" />Site Home</a>
                        <a href="/dashboard" className='calender-btn'><img src={calenderIcon} alt="" />Calender</a>
                        <a href="/dashboard" className='privateFiles-btn'><img src={fileIcon} alt="" />Private Files</a>
                    </div>
                    <h className="myCourse">My Course</h>
                    <div className="scrollCourse">
                        <div className="sideCourse">
                            <div className="course-container"><a href=""><img src={toga} alt="" />PTA 2023/2024 | 2-FTI | Komputasi Big Data | TEAM TEACHING</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />PTA 2023/2024 | 2IA08 | Struktur Data ** | BETTY SUSWATI</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />PTA 2023/2024 | 2IA08 |Pengantar Sains Data|PARNO</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />PTA 2023/2024 | 2IA08 | Informatika Kesehatan | SAYIDATI KARIMA</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />PTA 2023/2024 | 2IA08 | Algoritma & Pemrograman 3 * | PRIYO SARJONO WIBOWO</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />ATA 2022/2023 | 1IA07 | Ilmu Sosial Dasar | NUR PUTRI ERDIANTI</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />PTA 2023/2024 | 2-FTI | Praktikum Komputasi Big Data</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />ATA 2022/2023 | 1IA07 | Konsep Teknologi Informasi B ** | PIPIT DEWI ARNESIA</a></div>
                            <div className="course-container"><a href=""><img src={toga} alt="" />PTA 2023/2024 | 2IA08 | Matematika Informatika 3 | D L CRISPINA PARDEDE</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Grandwrapper">
                <div className="parent-wrap">
                    <nav className="nav">
                        <div className="greeting-container">
                            <div className="greeting">Selamat datang, <a className='nama'> RANGGA PRIAGO</a></div>
                        </div>
                        <div className="nav-item">
                                <img src={notif} alt="" className='notif'/>
                                <input type="text" className='searchBar'placeholder='Search'/>
                                <div className="profile" onClick={()=>{setOpen(!open)}}>
                                    <img src={profile} alt="" className='profile-img'/>
                                </div>
                                {
                                    open &&
                                    <div className="subMenu-wrap">
                                        <div className="subMenu">
                                            <a href="#">Dashboard</a>
                                            <a href="#">Profile</a>
                                            <a href="#">Settings</a>
                                            <a href="/">Logout</a>
                                        </div>
                                    </div>
                                }
                        </div>
                    </nav>
                    <div className="wrap">
                        <div className="left">
                            <div className="recent">
                                <div className="recent-container">
                                    <img className="leftArrow" src={leftArrow} alt="" />
                                    <div className="recent-left">
                                        <h className="recent-title">Program Sarjana</h>
                                        <h className="recent-body">PTA 2023/2024 | 2-FTI | Komputasi Big Data | TEAM TEACHING</h>
                                        <a href="#" className='recent-btn'>Explore</a>
                                    </div>
                                    <div className="recent-right">
                                        <img className='recent-picture' src={recent_foto} alt=''/>
                                    </div>
                                    <img src={rightArrow} alt="" className='rightArrow' />
                                </div>
                            </div>
                            <div className="course-mid">
                                <h>Course overview</h>
                                <div className="courseMid-container1">
                                    <div className="courseMid-container">
                                        <div className="courseMid-item">
                                            <div className="pic1"/>
                                            <a href="">PTA 2023/2024 | Matematika Inform..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic2"/>
                                            <a href="">PTA 2023/2024 | Matematika Lanjut..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic3"/>
                                            <a href="">PTA 2023/2024 | Pengantar Data Sai..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic4"/>
                                            <a href="">PTA 2023/2024 | Bahasa Indonesia |..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic5"/>
                                            <a href="">PTA 2023/2024 | Algoritma Pemogra..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic6"/>
                                            <a href="">PTA 2023/2024 | Struktur Data ** | Be..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic7"/>
                                            <a href="">PTA 2023/2024 | Informatika Kesehat..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic8"/>
                                            <a href="">PTA 2023/2024 | Fisika & Kimia Dasar..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic9"/>
                                            <a href="">PTA 2023/2024 | Ilmu Sosial Dasar | N..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic10"/>
                                            <a href="">PTA 2023/2024 | Matematika Dasar |..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic11"/>
                                            <a href="">PTA 2023/2024 | Matematika Inform..</a>
                                        </div>
                                        <div className="courseMid-item">
                                            <div className="pic12"/>
                                            <a href="">PTA 2023/2024 | Konsep Teknologi ..</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="timeline">
                                <div className="headerTime">
                                    <h>Time Line</h>
                                    <div className="imageTime">
                                        <img src={TimelineHistory} alt="" />
                                        <img src={TimelineFilter} alt="" />
                                    </div>
                                </div>
                                <div className="lineTime"/>
                                <div className="botTime">
                                    <img src={TimelinePic} alt="" />
                                    <h>No upcoming activity due</h>
                                </div>
                            </div>
                            <div className="events">
                                <h className="event-title">Upcoming Events</h>
                                <div className="events-container">
                                    <div className="event-item">
                                        <div className="event">
                                            <img src={eventIcon} alt="" />
                                            <div className="eventText">
                                                <a href="">
                                                    Kuis M0: Big Data Computing Overview (Kelas Transfer) closes
                                                </a>
                                                <h className='eventDate'>Saturday, 11 November, 4:00 PM</h>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="event">
                                            <img src={eventIcon} alt="" />
                                            <div className="eventText">
                                                <a href="">
                                                    KUIS M1 : Big Data Computing Applications and Technologies (Kelas Transfer) closes
                                                </a>
                                                <h className='eventDate'>Saturday, 11 November, 4:00 PM</h>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="event">
                                            <img src={eventIcon} alt="" />
                                            <div className="eventText">
                                                <a href="">
                                                    KUIS M2 : Introduction to Hadoop (Kelas Transfer) closes
                                                </a>
                                                <h className='eventDate'>Saturday, 11 November, 4:00 PM</h>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="event">
                                            <img src={eventIcon} alt="" />
                                            <div className="eventText">
                                                <a href="">
                                                    KUIS M3 : Data Preprocessing (Kelas Transfer) closes
                                                </a>
                                                <h className='eventDate'>Saturday, 11 November, 4:00 PM</h>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="event">
                                            <img src={eventIcon} alt="" />
                                            <div className="eventText">
                                                <a href="">
                                                    KUIS M4 : Introduction to Data Mining (Kelas Transfer) closes
                                                </a>
                                                <h className='eventDate'>Saturday, 11 November, 4:00 PM</h>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-right">
                                <h className='courseRight-title'>My Course</h>
                                <div className="courseRight-container">
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">PTA 2023/2024 | 2-FTI | Komputasi Big Data | TEAM TEACHING</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">PTA 2023/2024 | 2IA08 | Struktur Data ** | BETTY SUSWATI</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">PTA 2023/2024 | 2IA08 |Pengantar Sains Data|PARNO</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">PTA 2023/2024 | 2IA08 | Informatika Kesehatan | SAYIDATI KARIMA</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">PTA 2023/2024 | 2IA08 | Algoritma & Pemrograman 3 * | PRIYO SARJONO WIBOWO</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">ATA 2022/2023 | 1IA07 | Ilmu Sosial Dasar | NUR PUTRI ERDIANTI</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">PTA 2023/2024 | 2-FTI | Praktikum Komputasi Big Data</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">ATA 2022/2023 | 1IA07 | Konsep Teknologi Informasi B ** | PIPIT DEWI ARNESIA</a></div>
                                    <div className="line-rightCourse"/>
                                    <div className="courseRight-item"><img src={toga} alt="" /><a href="" className="courseRight-text">PTA 2023/2024 | 2IA08 | Matematika Informatika 3 | D L CRISPINA PARDEDE</a></div>
                                </div>
                            </div>
                            <div className="private-files">
                                <div className="privateFiles-container">
                                    <h className='privateFiles-title'>Private Files</h>
                                    <div className="privateFiles-item">
                                        No files available
                                    </div>
                                    <a href="" className="privateFiles-manage">Manage private files</a>
                                </div>
                            </div>
                            <div className="badge">
                                <div className="badge-container">
                                    <h className='badge-title'>Latest Badge</h>
                                    <div className="badge-item">
                                        You have no badges to display
                                    </div>
                                </div>
                            </div>
                            <div className="calendar">
                                <h className="calendar-title">Calendar</h>
                                <div className="calendar-container">
                                    <Calendar onChange={setDate} value={date}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerDash">
                    <div className="lineDash-foot"></div>
                    <div className="footerDash-item">
                        <h className="footerDash-text1">You are currently using guest access</h>
                        <a href="#" className="footerDash-text">Home</a>
                        <a href="#" className="footerDash-text">Data retention summary</a>
                        <a href="#" className="footerDash-text">Get the mobile app</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DashBoard