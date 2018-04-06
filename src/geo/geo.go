package geo

import "github.com/skycoin/getsky.org/db/models"

// Geo represents geolocation interface
type Geo interface {
	GetStates() ([]models.State, error)
	GetCountries() ([]models.Country, error)
}
