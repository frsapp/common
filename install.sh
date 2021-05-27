for f in *; do
    if [ -d "$f" ]; then
        if [ "$f" != ".github" ]; then
            cd $f
            echo "Working inside $f"
            # rm -rf node_modules
            npm install
            cd ..
        fi
    fi
done
