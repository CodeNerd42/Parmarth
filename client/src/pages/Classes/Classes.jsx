import React from "react";
import styles from "./Classes.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Classes = () => {
  return (
    <>
      <Navbar />
      <main className={styles.body}>
        {/* History Section */}
        <section className={styles.section}>
          <img
            src="/img/teaching.jpg"
            alt="Volunteers teaching children in a classroom"
            className={styles.sectionImage}
          />
          <h1>History</h1>
          <p>
            Our well-structured LT classes began 4 years ago when enthusiastic students
            witnessed the plight of children in slums and founded the club in 2015.
            Starting with teaching in the slums themselves, they worked tirelessly to
            demonstrate education's importance. Their efforts succeeded as more parents
            began sending their children. With the Director's permission, classes moved
            to Lecture Theatres (LTs). Today, over 150 children attend daily, taught by
            college student volunteers in those same LTs where they learn each morning.
          </p>
        </section>

        {/* Modus Operandi Section */}
        <section className={styles.section}>
          <img
            src="/img/pooja.jpg"
            alt="Children participating in a prayer session"
            className={styles.sectionImage}
          />
          <h1>Modus Operandi</h1>
          <p>
            Our LT classes now serve over 150 students daily with nearly 200 volunteers
            each academic year. Volunteers from B.Tech, MBA, and MCA programs teach just
            2-3 hours per week. Students are divided into 5 groups by ability level, each
            with customized materials. Our special JNV group prepares students for entrance
            exams with competitive books. Each group has an in-charge volunteer overseeing
            operations.
          </p>
        </section>

        {/* Tools Section */}
        <section className={styles.section}>
          <h1>Tools Used in Classes</h1>

          <div className={styles.toolCard}>
            <div className={styles.toolContent}>
              <h2>Books</h2>
              <p>
                Custom books for each group and subject maintain consistency despite
                weekly volunteer rotations.
              </p>
            </div>
            <img src="/img/books.jpg" alt="Custom educational books" />
          </div>

          <div className={`${styles.toolCard} ${styles.reverse}`}>
            <div className={styles.toolContent}>
              <h2>Stationery</h2>
              <p>
                We provide age-appropriate materials: slates for youngest learners,
                notebooks and pencils for older groups.
              </p>
            </div>
            <img src="/img/stationery.jpg" alt="Educational stationery supplies" />
          </div>

          <div className={`${styles.toolCard} ${styles}`}>
            <div className={styles.toolContent}>
              <h2>Homework</h2>
              <p>
                Homework is given to them on a daily basis and is checked the next following day.
              </p>
            </div>
            <img src="/img/homework.jpg" alt="Educational stationery supplies" />
          </div>

          <div className={`${styles.toolCard} ${styles.reverse}`}>
            <div className={styles.toolContent}>
              <h2>Projectors and Speakers
              </h2>
              <p>
                Nothing beat visual presentation of topics. While we play stories and
                poems on projector in lower groups, we use it for visualizing science 
                and other topics in the higher groups.
              </p>
            </div>
            <img src="/img/projector.jpg" alt="Educational stationery supplies" />
          </div>

          
          <div className={`${styles.toolCard} ${styles}`}>
            <div className={styles.toolContent}>
              <h2>Learn with Fun</h2>
              <p>
              Certain fun activities are also organized for them so that they can learn lot from it more
              creatively. A special slot of Sunday is reserved for such activities


              </p>
            </div>
            <img src="/img/Learn_With_Fun.png" alt="Educational stationery supplies" />
          </div>


          <div className={`${styles.toolCard} ${styles.reverse}`}>
            <div className={styles.toolContent}>
              <h2>Special Sessions</h2>
              <p>
              Sessions are organized on certain important topics such as cleanliness, career
              opportunities for them and a lot other to broaden their minds.
              </p>
            </div>
            <img src="/img/session.jpg" alt="Educational stationery supplies" />
          </div>
         
          <div className={`${styles.toolCard} ${styles}`}>
            <div className={styles.toolContent}>
              <h2>Tests</h2>
              <p>
              Regular tests are conducted at finite intervals so as to measure our progress and to
              make our teaching techniques more effective. Prizes are also distributed to motivate
              them toward studies.
              </p>
            </div>
            <img src="/img/test.jpg" alt="Educational stationery supplies" />
          </div>

         
        

          {/* Add remaining tool sections in same pattern */}
        </section>

        {/* Daily Schedule Section */}
        <section className={styles.section}>
          <h1>A Day in LT</h1>
          <p>
            Daily classes run from 4-6:30pm. Volunteers collect students from slums
            at 4pm. After assembly and prayer at 4:45pm, groups separate for lessons.
            Younger students receive one-on-one attention while older groups learn via
            blackboard instruction. Homework from previous days is checked first.
            Attendance is recorded for both students and volunteers. By 6:30pm,
            volunteers safely return all children home.
          </p>
          <img
            src="/img/prayer.jpg"
            alt="Students participating in group prayer"
            className={styles.fullWidthImage}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Classes;