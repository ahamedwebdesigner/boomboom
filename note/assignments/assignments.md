## 1) make a 10 poninst or more notse on http status codes 




    //res.end()
    //res.status(404).end()
    // res.status(404).send('File not found')
    //res.send('Hello World!')



        res.sendStatus(200)
        // === res.status(200).send('OK')

        res.sendStatus(403)
        // === res.status(403).send('Forbidden')

        res.sendStatus(404)
        // === res.status(404).send('Not Found')

        res.sendStatus(500)
        // === res.status(500).send('Internal Server Error')
