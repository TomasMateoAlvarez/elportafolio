export default function Me(){
    return(
    <section className="flex flex-col md:flex-row justify-between items-center py-20 px-4 max-w-7xl mx-auto">
    {/* Contenedor izquierdo con efecto de escritura */}
    <div className="flex-1 text-left">
      <h1 className="text-5xl font-bold text-black typing-effect">
        Who am I ?
      </h1>
    </div>

    {/* Contenedor derecho con descripción */}
    <div className="flex-1 text-left">
<h2 className="text-3xl font-semibold text-gray-800 max-w-lg">
  Born and raised in Uruguay, I am an enthusiastic Computer Science student with a passion for continuous learning and innovation. Recognized for my strong organizational skills, professionalism, and adaptability, I am a quick learner who thrives in dynamic environments. Always eager to embrace new opportunities, I strive to contribute positively to any team.
</h2>
</div>

  </section>
  )
} 