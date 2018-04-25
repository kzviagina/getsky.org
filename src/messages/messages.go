package messages

import (
	"github.com/skycoin/getsky.org/db"
	"github.com/skycoin/getsky.org/db/models"
)

// Messages is a storage of messages
type Messages interface {
	Post(msg *models.Message) (*models.Message, error)
	Update(msg *models.Message) error
	Get(id int64) (*models.MessageDetails, error)
	GetAdvertAuthors(advertID int64) ([]db.AdvertMessagesInfo, error)
	GetByAdvertAuthor(advertID int64, username string) ([]models.MessageDetails, error)
}
