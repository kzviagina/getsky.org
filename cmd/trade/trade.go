package main

import (
	"flag"
	"fmt"

	"github.com/AlexSugak/getsky-trade/db"
	"github.com/AlexSugak/getsky-trade/src/mail"
	"github.com/AlexSugak/getsky-trade/src/trade"
	"github.com/AlexSugak/getsky-trade/src/util/logger"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

func main() {
	bindingFlag := flag.String("binding", "0.0.0.0:8081", "HTTP server binding")
	mysqlFlag := flag.String("mysql", "0.0.0.0:3306", "HTTP server binding")
	recaptchaSecret := flag.String("recaptchaSecret", "6LdTKksUAAAAAAMgKNhOcxgWYYCDRrgx8YoEH5qX", "HTTP server binding")

	mailHost := flag.String("mailHost", "smtp.gmail.com:587", "HTTP server binding")
	mailUsername := flag.String("mailUsername", "test@email.com", "HTTP server binding")
	mailPassword := flag.String("mailPassword", "password", "HTTP server binding")
	feedbackAddress := flag.String("feedbackAddress", "test2@email.com", "HTTP server binding")

	flag.Parse()

	log := logger.InitLogger()

	sqlDb, err := initDb(*mysqlFlag)
	if err != nil {
		panic(err.Error())
	}

	auth := db.NewAuthenticator(sqlDb)
	storage := db.NewStorage(sqlDb)
	users := db.NewUsers(sqlDb)
	geo := db.NewGeo(sqlDb)
	messages := db.NewMessages(sqlDb)
	mailer := mail.NewMailer(*mailHost, *mailUsername, *mailPassword, *feedbackAddress)

	server := trade.NewHTTPServer(*recaptchaSecret, *bindingFlag, storage, users, auth, log, geo, messages, mailer)

	if err := server.Run(); err != nil {
		panic(err.Error())
	}
}

func initDb(addr string) (*sqlx.DB, error) {
	db, err := sqlx.Connect("mysql", fmt.Sprintf("root:root@(%s)/getskytrade?parseTime=true", addr))
	if err != nil {
		return nil, err
	}

	return db, nil
}
