<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.reviews.co.uk/product/review/new",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"name\": \"Luke Storer\",\n\t\"email\": \"luke@reviews.co.uk\",\n\t\"review\":\"This is an API review\",\n\t\"rating\": \"5\",\n\t\"sku\": \"DCMBPIN60\"\n}",
  CURLOPT_HTTPHEADER => array(
    "apikey: 021632e1a946b1aeba35cd77ff7d81a8",
    "content-type: application/json",
    "store: secret-linen-store"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}