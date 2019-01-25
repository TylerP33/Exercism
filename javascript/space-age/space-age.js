export const age = (planet, seconds) => {
	const planets = {
	 	"earth": 1,
	 	"mercury": 1 / 0.2408467, 
	 	"venus": 1 / 0.61519726,
	 	"mars": 1 / 1.8808158,
	 	"jupiter": 1 / 11.862615,
	 	"saturn": 1 / 29.447498,
	 	"uranus": 1 / 84.016846,
	 	"neptune": 1 / 164.79132
	}
	return Number((seconds * planets[planet] / 31557600).toFixed(2))
}