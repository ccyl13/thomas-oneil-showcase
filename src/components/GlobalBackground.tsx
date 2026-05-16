const GlobalBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="glow-orb-1" />
    <div className="glow-orb-2" />
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `linear-gradient(hsl(175 80% 50% / 0.8) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(175 80% 50% / 0.8) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
    />
    <div className="absolute inset-0 scanline opacity-20" />
  </div>
);

export default GlobalBackground;
