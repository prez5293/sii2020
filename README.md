# Installare e Configurare HBase 2.2.4

* Scaricare HBase 2.2.4 cliccando [qui](https://downloads.apache.org/hbase/2.2.4/hbase-2.2.4-bin.tar.gz)


* Estrarre il contenuto del pacchetto:
```
tar xzvf hbase-2.2.4-bin.tar.gz
```


* Creare due cartelle, una per hbase e una per zookeper, nelle quali HBase andrà a persistere i dati.


* Modificare il file `hbase-2.2.4/conf/hbase-site.xml` inserendo le seguenti configurazioni:

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


* Per far partire il daemon di HBase andare sotto la cartella `hbase-2.2.4/bin` ed eseguire il comando:

```
./start-hbase.sh
```


* Per aprire la shell di HBase andare sotto la cartella `hbase-2.2.4/bin` ed eseguire il comando:

```
./hbase shell
```


* Per far partire il server HBase andare sotto la cartella `hbase-2.2.4/bin` ed che espone le API Rest eseguire il comando:

```
./hbase rest start
```
