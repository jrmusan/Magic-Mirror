echo "Enter home address: "
read var
sed -i '' "2s/.*/source = \"$var\"/" api/Traffic.py

echo "Enter destination address: "
read var
sed -i '' "3s/.*/dest = \"$var\"/" api/Traffic.py
