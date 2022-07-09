# Installare e Configurare HBase 2.4.13

* Scaricare HBase 2.4.13 cliccando [qui](https://downloads.apache.org/hbase/2.4.13/hbase-2.4.13-bin.tar.gz)


* Estrarre il contenuto del pacchetto:
```
tar xzvf hbase-2.4.13-bin.tar.gz
```


* Creare due cartelle, una per hbase e una per zookeper, nelle quali HBase andrà a persistere i dati.


* Modificare il file `hbase-2.4.13/conf/hbase-site.xml` inserendo le seguenti configurazioni:

```
<configuration>
  <property>
    <name>hbase.rootdir</name>
    <value>file:///[path-to-hbase]</value>
  </property>
  <property>
    <name>hbase.zookeeper.property.dataDir</name>
    <value>[path-to-zookeper]</value>
  </property>
</configuration>
```
dove `[path-to-hbase]` e `[path-to-zookeper]` sono i path alle cartelle create in precedenza.


* Per far partire il daemon di HBase andare sotto la cartella `hbase-2.4.13/bin` ed eseguire il comando:

```
./start-hbase.sh
```


* Per aprire la shell di HBase andare sotto la cartella `hbase-2.4.13/bin` ed eseguire il comando:

```
./hbase shell
```

* Per far partire il server HBase che espone le REST API andare sotto la cartella `hbase-2.4.13/bin` ed eseguire il comando:

```
./hbase rest start
```

# Aggiungere i dati su HBase

* Aprire la shell di Hbase (come indicato nel paragrafo precendente) ed eseguire i seguenti comandi per infasare il database:

creare la table "westeros" con la column_family "house":

```
create 'westeros', 'house'
```

inserire i dati nella tabella:

```
put 'westeros','1','house:code','stark'
put 'westeros','1','house:name','Stark'
put 'westeros','1','house:castle','Grande Inverno'
put 'westeros','1','house:words','L\'inverno sta arrivando'

put 'westeros','2','house:code','lannister'
put 'westeros','2','house:name','Lannister'
put 'westeros','2','house:castle','Castel Granito'
put 'westeros','2','house:words','Ascolta il mio ruggito!'

put 'westeros','3','house:code','baratheon'
put 'westeros','3','house:name','Baratheon'
put 'westeros','3','house:castle','Capo Tempesta'
put 'westeros','3','house:words','Nostra è la furia'

put 'westeros','4','house:code','targaryen'
put 'westeros','4','house:name','Targaryen'
put 'westeros','4','house:castle','Roccia del Drago'
put 'westeros','4','house:words','Fuoco e Sangue'
```

# Start dell'applicazione

Prerequisiti: installare nodejs e yarn.

* Per far partire il backend entrare nella cartella `sii2020/how-be` ed eseguire il comando:

```
node app.js
```

* Per far partire il frontend entrare nella cartella `sii2020/how-fe` ed eseguire i comandi:

per installare le dipendenze:

```
yarn
```

per far partire il frontend:

```
yarn start
```

l'applicazione sarà disponibile all'url: http://localhost:3000
