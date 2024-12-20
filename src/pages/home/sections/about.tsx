function About() {
  return (
    <section id="about" className="container mx-auto flex flex-col gap-2 py-4">
      <h2 className="card-title">About Us</h2>
      <hr />

      <div className="flex flex-col gap-4 sm:flex-row">
        <img src="/logo.webp" alt="" className="mx-auto h-24 w-24 rounded-lg" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          excepturi ut obcaecati minima, pariatur amet, tempora dolorum alias
          culpa quis incidunt ipsa nam deleniti earum architecto illum
          repellendus harum laborum?
        </p>
      </div>
    </section>
  );
}

export default About;
