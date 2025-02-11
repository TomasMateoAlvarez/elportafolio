// Agrega esta sección debajo del Header
export default function IntroSection() {
    return (
      <section className="flex justify-between items-center py-20 px-4 max-w-7xl mx-auto">
        {/* Contenedor izquierdo */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold text-black">
            Hi there! <br /> My name is Mateo Alvarez
          </h1>
        </div>
  
        {/* Contenedor derecho */}
        <div className="flex-1 text-right">
          <h2 className="text-4xl font-semibold text-gray-800">
            <br />
            A JR Developer looking for new challengess
          </h2>
        </div>
      </section>
    );
  }
  