address=$1
if [[ X$address == X ]] ; then
       address=8000
fi       
python3 -m http.server $address &
google-chrome http://localhost:$address
