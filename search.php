<?php


error_reporting(E_ERROR | E_PARSE);
libxml_use_internal_errors(true);






class JsonXMLElement extends SimpleXMLElement implements JsonSerializable {
    public function jsonSerialize() {
        return (object) (array) $this;
    }

}







?>