
const FeaturedSection = () => {
  return (
    <div className="py-16 container-custom">
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1533681475364-826b39bc4abf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="Manufacturing process"
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="text-center max-w-lg mx-auto">
        <h2 className="text-lg uppercase tracking-wider font-medium mb-4">
          FOCUSED ON HIGH-QUALITY MANUFACTURING AND DESIGN.
        </h2>
        <p className="text-sm text-gray-600">
          Our commitment to quality and sustainability drives everything we do. From sourcing materials to final production, we ensure every piece meets our standards.
        </p>
      </div>
    </div>
  );
};

export default FeaturedSection;
