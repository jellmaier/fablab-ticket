#! /bin/sh
#

# Get All Rest roots as JSON

rm restroutes.json

grep -r -h --include \*.php 'register_rest_route' ../../ >> restroutes1.json

sed s+register_rest_route\(\ \'sharepl\/v1\'\,+\{\ \"route\"\:+g restroutes1.json >> restroutes2.json # replace register_rest_route( 'sharepl/v1', with { "route":
sed s+\,\ array\(+\ \}\,+g restroutes2.json >> restroutes3.json # replace , array( with },
sed s+\'+\"+g restroutes3.json >> restroutes4.json # replace ' with "
sed s+\/\(\?P\<id\>\\\\d\\\+\)++g restroutes4.json >> restroutes5.json # remove /(?P<id>\d+)
sed '1s/^\ /\{\"routes\"\:\ \[/' restroutes5.json >> restroutes6.json # add {"routes": [ to first line
sed '$ s/\}\,/\}\ \]\}/g' restroutes6.json >> restroutes7.json # replace }, with } ]}
sed s+\/++g restroutes7.json >> restroutes.json # replace }, with } ]}

rm restroutes1.json
rm restroutes2.json
rm restroutes3.json
rm restroutes4.json
rm restroutes5.json
rm restroutes6.json
rm restroutes7.json