for f in *; do
    if [ -d "$f" ]; then
        if [ "$f" != ".github" ]; then
            cd $f
            echo "Working inside $f"
            # rm -rf node_modules
            npm install
            npm run build
            cd ..
        fi
    fi
done
