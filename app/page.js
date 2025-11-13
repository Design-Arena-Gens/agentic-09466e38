export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#667eea' }}>Ms. Sarah Johnson</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>About</a>
            <a href="#experience" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Experience</a>
            <a href="#philosophy" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Philosophy</a>
            <a href="#contact" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '6rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
          margin: '0 auto 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          border: '5px solid white',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          👩‍🏫
        </div>
        <h2 style={{ fontSize: '3rem', margin: '0 0 1rem', fontWeight: '700' }}>Ms. Sarah Johnson</h2>
        <p style={{ fontSize: '1.5rem', margin: '0 0 2rem', opacity: 0.9 }}>Elementary Education Specialist</p>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', opacity: 0.9 }}>
          Passionate educator with 10+ years of experience inspiring young minds through innovative teaching methods and personalized learning approaches.
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={{
        background: 'white',
        padding: '5rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: '#667eea' }}>About Me</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{
              padding: '2rem',
              background: '#f8f9fa',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Education</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                M.Ed. in Elementary Education<br />
                University of California, Berkeley<br />
                B.A. in Child Development<br />
                Specialized in STEM Integration
              </p>
            </div>
            <div style={{
              padding: '2rem',
              background: '#f8f9fa',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Achievements</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                • Teacher of the Year 2022<br />
                • National Board Certified<br />
                • STEM Excellence Award<br />
                • Published Educational Researcher
              </p>
            </div>
            <div style={{
              padding: '2rem',
              background: '#f8f9fa',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Specializations</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                • Project-Based Learning<br />
                • STEM Integration<br />
                • Differentiated Instruction<br />
                • Social-Emotional Learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '5rem 2rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Teaching Experience</h3>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                title: 'Lead Elementary Teacher',
                school: 'Riverside Elementary School',
                years: '2018 - Present',
                description: 'Grades 4-5 STEM Integration Lead. Developed and implemented innovative project-based learning curriculum reaching 150+ students annually.'
              },
              {
                title: 'Elementary Teacher',
                school: 'Oakwood Primary Academy',
                years: '2015 - 2018',
                description: 'Grades 2-3. Pioneered differentiated instruction strategies and established peer mentoring program.'
              },
              {
                title: 'Student Teacher & Assistant',
                school: 'Lincoln Elementary',
                years: '2013 - 2015',
                description: 'Grades K-5. Assisted with curriculum development and classroom management across multiple grade levels.'
              }
            ].map((job, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h4 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem' }}>{job.title}</h4>
                <p style={{ fontSize: '1.1rem', margin: '0 0 0.5rem', opacity: 0.9 }}>{job.school}</p>
                <p style={{ fontSize: '0.9rem', margin: '0 0 1rem', opacity: 0.8 }}>{job.years}</p>
                <p style={{ lineHeight: '1.6', opacity: 0.9 }}>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section id="philosophy" style={{
        background: 'white',
        padding: '5rem 2rem'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#667eea' }}>Teaching Philosophy</h3>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I believe that every child is a unique learner with unlimited potential. My approach centers on creating an inclusive, engaging classroom environment where students feel safe to explore, question, and grow both academically and emotionally.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Through project-based learning and hands-on STEM activities, I help students make real-world connections to their learning. I emphasize critical thinking, collaboration, and creativity—skills that will serve them throughout their lives.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Differentiated instruction is at the heart of my practice. I recognize that students learn at different paces and through different modalities, and I adapt my teaching to meet each child where they are, while challenging them to reach new heights.
            </p>
            <p>
              Most importantly, I strive to instill a love of learning in my students. When children are curious, engaged, and confident, there are no limits to what they can achieve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '5rem 2rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get In Touch</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', opacity: 0.9 }}>
            I'm always happy to connect with fellow educators, parents, or anyone interested in innovative teaching methods.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href="mailto:sarah.johnson@example.com" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ✉️ sarah.johnson@example.com
            </a>
            <a href="https://linkedin.com" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              💼 LinkedIn Profile
            </a>
            <p style={{ margin: '1rem 0 0', opacity: 0.9 }}>
              📍 San Francisco Bay Area
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.2)',
        padding: '2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <p style={{ margin: 0, opacity: 0.8 }}>© 2024 Sarah Johnson. All rights reserved.</p>
      </footer>
    </main>
  )
}
